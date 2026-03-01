import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (
      !process.env.EMAIL_SMTP_HOST ||
      !process.env.EMAIL_SMTP_USER ||
      !process.env.EMAIL_SMTP_PASS
    ) {
      console.warn("E-Mail-Konfiguration fehlt. Lead-Zusammenfassung wird übersprungen.");
      return Response.json({ ok: true, skipped: true });
    }

    // Build conversation summary
    const conversationLines = messages
      .map((msg: { role: string; content: string }) => {
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
      to: process.env.NOTIFICATION_EMAIL || "st@mes-beratung.de",
      subject: `[ITEBV Website] Neue Chatbot-Anfrage – ${timestamp}`,
      text: emailBody,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Fehler beim Senden der Lead-E-Mail:", error);
    return Response.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
