import express from "express";
import {
  createBook,
  getAllBooksController,
  deleteBookById,
  updateBookById,
} from "../controllers/bookController"; // You hve to import the logic you made like getALLBooks

const router = express.Router();

router.post("/create-book", createBook);
router.get("/", getAllBooksController); // Then define the endpoint for it then go to src/server.ts
router.delete("/:id", deleteBookById);
router.put("/:id", updateBookById);

export default router;
