import MSG from "../../models/ShemaEmail.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMessage = async (
  name,
  company,
  email,
  phone,
  message,
  location,
  date,
  time
) => {
  const mailOptions = {
    from:`"brandax" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Appointment Request Received - Brandax",

    text: `
Dear ${name},

Thank you for choosing Brandax.

We have successfully received your appointment request.

Appointment Details

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Location: ${location}
Preferred Date: ${date}
Preferred Time: ${time}

Project Details:
${message}

What happens next?

• Our team will review your request.
• We will contact you shortly to confirm your appointment.
• We'll discuss your project and provide the best solution.

Thank you for trusting Brandax.

Best Regards,
Brandax Team
Branding | Web Development | Digital Marketing
`,
  };

  try {
  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.response);
} catch (error) {
  console.log("Mail Error:", error);
}
};
export const createMSG = async (req, res) => {
  try {
    const { name, company, email, phone, message, location, date, time } =
      req.body;

    if (
      !name ||
      !company ||
      !email ||
      !phone ||
      !message ||
      !location ||
      !date ||
      !time
    ) {
      return res.status(400).json({
        message: "Form incomplete. Please complete the form.",
      });
    }

    const existingUser = await MSG.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "We already received a request from this email.",
      });
    }

const createMSG = await MSG.create({
  name,
  company,
  email,
  phone,
  message,
  location,
  date,
  time,
});

// Send email
await sendMessage(
  name,
  company,
  email,
  phone,
  message,
  location,
  date,
  time
);

return res.status(201).json({
  message: "Your request has been sent to Brandax.",
  data: createMSG,
});
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};