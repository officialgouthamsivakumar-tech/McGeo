import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, service, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // SMTP credentials (hardcoded)
    // If using Google Workspace (Gmail for business), use smtp.gmail.com with App Password
    // If using other providers, update host and port accordingly
    const smtpUser = 'sales@mcgeogroup.com';
    const smtpPassword = 'ravisanth3044'; // Use App Password if Google Workspace
    const smtpHost = 'smtp.gmail.com'; // Change to your email provider's SMTP host
    const smtpPort = 587; // Common ports: 587 (TLS), 465 (SSL), 25 (unsecured)
    
    // Alternative SMTP settings for common providers:
    // Gmail/Google Workspace: smtp.gmail.com, port 587
    // Outlook/Hotmail: smtp-mail.outlook.com, port 587
    // Yahoo: smtp.mail.yahoo.com, port 587
    // Custom email hosting: Check with your email provider

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Email content for admin/company
    const mailOptions = {
      from: smtpUser,
      to: 'sales@mcgeogroup.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            ${service ? `<p><strong>Service Interest:</strong> ${service}</p>` : ''}
            ${budget ? `<p><strong>Project Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Message:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #f97316; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    if (email) {
      const confirmationMailOptions = {
        from: smtpUser,
        to: email,
        subject: 'Thank you for contacting McGeo',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
              Thank You for Contacting McGeo
            </h2>
            
            <p>Dear ${name},</p>
            
            <p>Thank you for reaching out to us. We have received your message and will get back to you within 24-48 hours.</p>
            
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your Message:</strong></p>
              <p style="border-left: 4px solid #f97316; padding-left: 15px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
            
            <p>If you have any urgent inquiries, please feel free to call us at <a href="tel:9605673444">96056 73444</a>.</p>
            
            <p>Best regards,<br>The McGeo Team</p>
          </div>
        `,
      };

      await transporter.sendMail(confirmationMailOptions);
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

