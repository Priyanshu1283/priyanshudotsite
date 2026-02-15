import amqp from "amqplib";
import { sendEmail } from "../utils/sendEmail.js";

const QUEUE_NAME = "contact_message";
const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost";

async function startListener() {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE_NAME, {
      durable: true,
    });

    console.log(`🐰 RabbitMQ Connected. Waiting for messages in ${QUEUE_NAME}...`);

    channel.consume(
      QUEUE_NAME,
      async (msg) => {
        if (msg !== null) {
          try {
            const content = JSON.parse(msg.content.toString());
            const { name, email, message } = content;

            console.log(`📩 Processing message from: ${email}`);

            const html = `
              <h2>Hey ${name},</h2>
              <p>Thanks for reaching out! We’ve received your message:</p>
              <blockquote>${message}</blockquote>
              <p>We’ll get back to you soon! 🎧</p>
              <br/>
              <p>- Pranshu | Spotify Pranshu Team</p>
            `;

            await sendEmail({
              to: email,
              subject: "We’ve received your message!",
              html: html,
            });

            console.log("✅ Email sent successfully from worker.");
            channel.ack(msg);
          } catch (err) {
            console.error("❌ Error processing message:", err);
            // Optionally nack to requeue: channel.nack(msg);
          }
        }
      },
      {
        noAck: false,
      }
    );
  } catch (error) {
    console.warn("⚠️ RabbitMQ Connection Failed (Is RabbitMQ running?). Skipping worker.");
    console.warn(error.message);
  }
}

export default startListener;
