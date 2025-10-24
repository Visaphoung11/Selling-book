import express from "express";

const router = express.Router();

router.post("/create-cart", (req, res) => {
  res.json({ message: "Create cart endpoint" });
});

export default router;
