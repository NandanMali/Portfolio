import express from "express";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Verify Gmail configuration
transporter.verify((error) => {
  if (error) {
    console.error("Gmail configuration error:", error.message);
  } else {
    console.log("Gmail transporter is ready");
  }
});

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      projectType,
      budget,
      message
    } = req.body;

    // Required fields
    if (!name || !email || !projectType || !budget || !message) {
      console.log("incomplete field");
        return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    // Clean data
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanProjectType = String(projectType).trim();
    const cleanBudget = String(budget).trim();
    const cleanMessage = String(message).trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
        console.log("incomplete email");
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address."
      });
    }

    // Name validation
    if (cleanName.length < 2) {
        console.log("incomplete name");
      return res.status(400).json({
        success: false,
        message: "Name must contain at least 2 characters."
      });
    }

    // Message validation
    if (cleanMessage.length < 10) {
        console.log("incomplete msg");
      return res.status(400).json({
        success: false,
        message: "Message must contain at least 10 characters."
      });
    }

    const mailOptions = {
      from: `"Portfolio Enquiry" <${process.env.GMAIL_USER}>`,

      to: process.env.GMAIL_USER,

      replyTo: cleanEmail,

      subject: `New Project Enquiry - ${cleanProjectType}`,

      text: `
New Project Enquiry

Name: ${cleanName}
Email: ${cleanEmail}
Project Type: ${cleanProjectType}
Budget: ${cleanBudget}

Message:
${cleanMessage}

--------------------------------
Submitted from portfolio website.
      `,

      html: `
        <!DOCTYPE html>

        <html>
          <head>
            <meta charset="UTF-8" />
            <title>New Project Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 30px;
              background: #f5f6f8;
              font-family: Arial, Helvetica, sans-serif;
            "
          >

            <div
              style="
                max-width: 650px;
                margin: auto;
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e5e7eb;
              "
            >

              <div
                style="
                  background: #111827;
                  padding: 25px;
                  color: #ffffff;
                "
              >
                <h1 style="margin: 0;">
                  New Project Enquiry
                </h1>

                <p style="color: #d1d5db;">
                  Someone submitted an enquiry through your portfolio.
                </p>
              </div>

              <div style="padding: 30px;">

                <div style="margin-bottom: 20px;">
                  <strong>Name</strong>

                  <p>
                    ${escapeHtml(cleanName)}
                  </p>
                </div>

                <div style="margin-bottom: 20px;">
                  <strong>Email</strong>

                  <p>
                    <a
                      href="mailto:${escapeHtml(cleanEmail)}"
                      style="color: #2563eb;"
                    >
                      ${escapeHtml(cleanEmail)}
                    </a>
                  </p>
                </div>

                <div style="margin-bottom: 20px;">
                  <strong>Project Type</strong>

                  <p>
                    ${escapeHtml(cleanProjectType)}
                  </p>
                </div>

                <div style="margin-bottom: 20px;">
                  <strong>Budget</strong>

                  <p>
                    ${escapeHtml(cleanBudget)}
                  </p>
                </div>

                <div>
                  <strong>Message</strong>

                  <div
                    style="
                      margin-top: 10px;
                      padding: 15px;
                      background: #f9fafb;
                      border-radius: 8px;
                      line-height: 1.6;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(cleanMessage)}
                  </div>
                </div>

              </div>

              <div
                style="
                  padding: 18px 30px;
                  background: #f9fafb;
                  color: #6b7280;
                  font-size: 13px;
                "
              >
                Submitted from your portfolio website.
              </div>

            </div>

          </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);


    return res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully."
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send enquiry. Please try again later."
    });
  }
});

// HTML escaping
const escapeHtml = (value) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default router;