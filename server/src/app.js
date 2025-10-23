import express from "express";
import msgRoutes from "./routes/message.route.js";

const app = express();

app.use(express.json());
app.use("/messages", msgRoutes);

export default app;
