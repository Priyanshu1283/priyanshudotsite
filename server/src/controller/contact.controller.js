import Contact from "../model/contact.model.js";
import { sendEmail } from "../utils/sendEmail.js";
import { getWelcomeEmailHtml, getAdminNotificationHtml } from "../utils/emailTemplates.js";

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save message to DB
    const contact = await Contact.create({ name, email, message });

    // Send email to user (Welcome)
    await sendEmail({
      to: email,
      subject: "Thanks for contacting me! 🚀",
      html: getWelcomeEmailHtml(name, message),
    });

    // Send email to yourself (Admin Notification)
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: getAdminNotificationHtml(name, email, message),
    });

    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (error) {
    console.error("❌ Error in contact controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
