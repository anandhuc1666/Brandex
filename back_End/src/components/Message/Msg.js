import MSG from "../../models/ShemaEmail.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Error:", error);
  } else {
    console.log("SMTP Server is ready");
  }
});

const sendMessage = async (
  name,
  company,
  email,
  phone,
  message,
  location,
  date,
  time,
) => {
  console.log("📨 sendMessage() called");
  console.log("Recipient:", email);

  const mailOptions = {
    from: `"Brandax" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Appointment Request Received - Brandax",

    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Appointment Request Received</title>
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:30px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">

<!-- Banner -->
<tr>
<td>
<img
src="https://res.cloudinary.com/dwyrlikkm/image/upload/f_auto,q_auto/ChatGPT_Image_Jun_26_2026_10_15_05_AM_je2vcw"
width="100%"
style="display:block;"
alt="Brandax Banner">
</td>
</tr>

<!-- Logo -->
<tr>
<td align="center" style="padding:30px 20px 10px;">
<img
src="https://res.cloudinary.com/dwyrlikkm/image/upload/Brandax_idy9yr"
width="220"
alt="Brandax Logo">
</td>
</tr>

<!-- Heading -->
<tr>
<td align="center">
<h2 style="color:#1565C0;margin:10px 0;">
Appointment Request Received
</h2>

<p style="color:#555;font-size:16px;">
Hello <strong>${name}</strong>,
</p>

<p style="padding:0 40px;color:#666;line-height:28px;">
Thank you for choosing <strong>Brandax</strong>.
We have successfully received your appointment request.
Our team will review your details and contact you shortly.
</p>
</td>
</tr>

<!-- Details -->
<tr>
<td style="padding:30px;">

<table width="100%" cellpadding="10" cellspacing="0" style="border:1px solid #ddd;border-collapse:collapse;">

<tr style="background:#1565C0;color:white;">
<th align="left">Field</th>
<th align="left">Information</th>
</tr>

<tr>
<td>Name</td>
<td>${name}</td>
</tr>

<tr>
<td>Company</td>
<td>${company}</td>
</tr>

<tr>
<td>Email</td>
<td>${email}</td>
</tr>

<tr>
<td>Phone</td>
<td>${phone}</td>
</tr>

<tr>
<td>Location</td>
<td>${location}</td>
</tr>

<tr>
<td>Date</td>
<td>${date}</td>
</tr>

<tr>
<td>Time</td>
<td>${time}</td>
</tr>

<tr>
<td>Project Details</td>
<td>${message}</td>
</tr>

</table>

</td>
</tr>

<!-- Footer -->
<tr>
<td align="center"
style="background:#0D47A1;color:white;padding:30px;">

<h3 style="margin:0;">
Brandax Team
</h3>

<p>
Branding | Web Development | Digital Marketing
</p>

<p>
📧 brandaxbrandingstudio@gmail.com
</p>

<p>
Thank you for trusting Brandax ❤️
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
  };

  try {
    console.log("📨 sendMessage() called");
    console.log("Recipient:", email);

  const info = await transporter.sendMail(mailOptions);

console.log("Email sent:", info.messageId);

return info;
  } catch (err) {
    console.error("❌ Mail Error");
    console.error(err);
    throw err;
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
    await sendMessage(
      name,
      company,
      email,
      phone,
      message,
      location,
      date,
      time,
    );

    return res.status(201).json({
      message: "Your request has been sent to Brandax.",
      data: createMSG,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error!!",
    });
  }
};
