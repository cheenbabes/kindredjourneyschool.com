import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "eugene.baibourine@gmail.com";

    await resend.emails.send({
      from: "Kindred Journey School <onboarding@resend.dev>",
      to: toEmail,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
