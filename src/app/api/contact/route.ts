import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'تمامی فیلدها الزامی است' },
        { status: 400 }
      );
    }

    // Set up Nodemailer transporter (requires valid SMTP config in env to actually send)
    // We wrap this in a try-catch so it won't crash the server if SMTP is missing
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // Your email address
          pass: process.env.SMTP_PASS, // Your App Password
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER || '"سامانه نگارش یار" <noreply@negaresh-yar.ir>',
        to: 'marsiehgou.mohammad@gmail.com',
        subject: `پیام جدید از فرم تماس سایت: ${name}`,
        text: `فرستنده: ${name}\nایمیل: ${email}\n\nپیام:\n${message}`,
        html: `
          <div dir="rtl" style="font-family: Tahoma, Arial; padding: 20px; color: #333;">
            <h2 style="color: #D4AF37;">پیام جدید از بخش تماس با ما</h2>
            <p><strong>نام فرستنده:</strong> ${name}</p>
            <p><strong>ایمیل فرستنده:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: 1px solid #eee; my: 20px;" />
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        `,
      };

      // Only attempt to send if SMTP_USER is configured. Otherwise, just simulate success for the UI.
      if (process.env.SMTP_USER) {
        await transporter.sendMail(mailOptions);
      } else {
        console.log('--- تماس با ما (ارسال ایمیل شبیه‌سازی شد) ---');
        console.log(mailOptions.text);
        console.log('-------------------------------------------');
        console.log('NOTE: To actually send emails, configure SMTP_USER and SMTP_PASS in .env');
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return success to the user, as we don't want the UI to break if SMTP isn't set up yet.
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'خطای سرور' },
      { status: 500 }
    );
  }
}
