import { Router } from 'express';
import { createAuthorHandler , getAuthorsHandler, updateAuthorHandler, deleteAuthorHandler } from "@/controllers/authorController";

const authorRouter = Router();

authorRouter.post("/create-author", createAuthorHandler);
authorRouter.get("/get-all-author", getAuthorsHandler);
authorRouter.put("/:id", updateAuthorHandler );
authorRouter.delete("/:id", deleteAuthorHandler );

export { authorRouter };
