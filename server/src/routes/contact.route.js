import express from "express";
import { handleContactForm } from "../controller/contact.controller.js";

const router = express.Router();
router.post("/", handleContactForm);

export default router;
