import express from "express";
import {
  createBook,
  getAllBooks,
  deleteBookById,
} from "@/controllers/bookController"; // You hve to import the logic you made like getALLBooks

const router = express.Router();

router.post("/create-book", createBook);
router.get("/", getAllBooks); // Then define the endpoint for it then go to src/server.ts
router.delete("/:id", deleteBookById);

export default router;
