import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !email) {
      return Response.json(
        { error: "First name and email are required" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "eugene.baibourine@gmail.com";

    const { data, error } = await resend.emails.send({
      from: "Kindred Journey School <director@kindredjourneyschool.com>",
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName || ""}`.trim(),
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #2D4A3E;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #2D4A3E; font-weight: 500;">${firstName} ${lastName || ""}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2D4A3E;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #666;">Phone</td>
              <td style="padding: 8px 0; color: #2D4A3E;">${phone}</td>
            </tr>
            ` : ""}
          </table>
          ${message ? `
          <div style="margin-top: 16px; padding: 16px; background: #F7F5F0; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px; font-size: 14px;">Message</p>
            <p style="color: #2D4A3E; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ""}
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent:", data);
    return Response.json(data);
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
