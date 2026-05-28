import { Router, type IRouter, type Request, type Response } from "express";
import Anthropic from "@anthropic-ai/sdk";
import nodemailer from "nodemailer";
import { SYSTEM_PROMPT } from "../lib/chatbot-context";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

router.post("/chat", async (req: Request, res: Response) => {
  try {
    const { messages } = req.body as {
      messages: { role: string; content: string }[];
    };

    if (!process.env.ANTHROPIC_API_KEY) {
      res.status(503).json({ error: "Chatbot ist momentan nicht konfiguriert." });
      return;
    }

    const formattedMessages = messages.map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: msg.content,
    }));

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders?.();

    let closed = false;
    const safeWriteEnd = (errorData?: { error: string }) => {
      if (closed) return;
      closed = true;
      try {
        if (errorData) {
          res.write(`data: ${JSON.stringify(errorData)}\n\n`);
        }
        res.write("data: [DONE]\n\n");
      } catch {
        // ignore
      }
      res.end();
    };

    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: formattedMessages,
    });

    stream.on("text", (text: string) => {
      if (!closed) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
      }
    });

    stream.on("end", () => safeWriteEnd());

    stream.on("error", (error: unknown) => {
      logger.error({ err: error }, "Chat stream error");
      const err = error as { error?: { message?: string }; message?: string };
      const msg =
        err?.error?.message ||
        err?.message ||
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
      safeWriteEnd({ error: msg });
    });

    req.on("close", () => {
      if (!closed) {
        closed = true;
        try {
          stream.abort?.();
        } catch {
          // ignore
        }
      }
    });
  } catch (error) {
    logger.error({ err: error }, "Chat API error");
    if (!res.headersSent) {
      res.status(500).json({
        error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      });
    }
  }
});

router.post("/chat/send-summary", async (req: Request, res: Response) => {
  try {
    const { messages } = req.body as {
      messages: { role: string; content: string }[];
    };

    if (
      !process.env.EMAIL_SMTP_HOST ||
      !process.env.EMAIL_SMTP_USER ||
      !process.env.EMAIL_SMTP_PASS
    ) {
      logger.warn("E-Mail-Konfiguration fehlt. Lead-Zusammenfassung wird übersprungen.");
      res.json({ ok: true, skipped: true });
      return;
    }

    const conversationLines = messages
      .map((msg) => {
        const label = msg.role === "user" ? "Besucher" : "Chatbot";
        return `${label}: ${msg.content}`;
      })
      .join("\n\n");

    const timestamp = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    });

    const emailBody = `
Neue Chatbot-Gesprächszusammenfassung
======================================

Zeitpunkt: ${timestamp}

Gesprächsverlauf:
--------------------------------------
${conversationLines}
--------------------------------------

Diese E-Mail wurde automatisch vom Website-Chatbot generiert.
    `.trim();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: parseInt(process.env.EMAIL_SMTP_PORT || "587"),
      secure: process.env.EMAIL_SMTP_PORT === "465",
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || "st@itebv.de",
      subject: `[ITEBV Website] Neue Chatbot-Anfrage – ${timestamp}`,
      text: emailBody,
    });

    res.json({ ok: true });
  } catch (error) {
    logger.error({ err: error }, "Fehler beim Senden der Lead-E-Mail");
    res.status(500).json({ error: "E-Mail konnte nicht gesendet werden." });
  }
});

export default router;
