import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Message route working fine ✅" });
});

export default router;
