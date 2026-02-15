import express from "express";
import cors from "cors";
import msgRoutes from "./routes/contact.route.js"; // ✅ relative to src/

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", msgRoutes);

export default app;
