import express from "express";
import cors from "cors";
import msgRoutes from "./routes/contact.route.js";


const app = express();

// Middleware
// Middleware
const allowedOrigins = [
    "http://localhost:3001",
    "https://priyanshudotsite.vercel.app",
    "http://localhost:3000",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    })
);
app.use(express.json());



// Routes
app.use("/api/contact", msgRoutes);

export default app;
