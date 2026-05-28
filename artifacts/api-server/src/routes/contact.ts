import { Router, type IRouter, type Request, type Response } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      res.status(400).json({ error: "Bitte füllen Sie alle Pflichtfelder aus." });
      return;
    }

    const timestamp = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
    });

    const emailBody = `
Neue Kontaktanfrage über die Website
======================================

Zeitpunkt: ${timestamp}

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "Nicht angegeben"}

Nachricht:
--------------------------------------
${message}
--------------------------------------

Diese E-Mail wurde automatisch über das Kontaktformular auf itebv.de gesendet.
    `.trim();

    if (
      process.env.EMAIL_SMTP_HOST &&
      process.env.EMAIL_SMTP_USER &&
      process.env.EMAIL_SMTP_PASS
    ) {
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
        replyTo: email,
        to: process.env.NOTIFICATION_EMAIL || "st@itebv.de",
        subject: `[ITEBV Website] Kontaktanfrage von ${name}`,
        text: emailBody,
      });
    } else {
      logger.info(
        { emailBody },
        "=== NEUE KONTAKTANFRAGE (SMTP nicht konfiguriert) ===",
      );
    }

    res.json({ ok: true });
  } catch (error) {
    logger.error({ err: error }, "Fehler beim Verarbeiten der Kontaktanfrage");
    res.status(500).json({
      error:
        "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es per E-Mail.",
    });
  }
});

export default router;
