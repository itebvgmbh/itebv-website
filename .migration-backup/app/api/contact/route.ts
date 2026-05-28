import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
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

    // If SMTP is configured, send email
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
        to: process.env.NOTIFICATION_EMAIL || "st@mes-beratung.de",
        subject: `[ITEBV Website] Kontaktanfrage von ${name}`,
        text: emailBody,
      });
    } else {
      // Fallback: Log to console if no SMTP configured
      console.log("=== NEUE KONTAKTANFRAGE (SMTP nicht konfiguriert) ===");
      console.log(emailBody);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Fehler beim Verarbeiten der Kontaktanfrage:", error);
    return Response.json(
      { error: "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es per E-Mail." },
      { status: 500 }
    );
  }
}
