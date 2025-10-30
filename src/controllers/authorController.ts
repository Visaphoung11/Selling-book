import { Request, Response } from "express";
import {
  createAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
  deleteAuthor,
} from "../services/authorService";

export const createAuthorHandler = async (req: Request, res: Response) => {
  await createAuthor(req, res);
};

export const getAuthorByIdHandler = async (req: Request, res: Response) => {
  await getAuthorById(req, res);
};

export const getAuthorsHandler = async (req: Request, res: Response) => {
  await getAuthors(req, res);
};

export const updateAuthorHandler = async (req: Request, res: Response) => {
  await updateAuthor(req, res);
};

export const deleteAuthorHandler = async (req: Request, res: Response) => {
  await deleteAuthor(req, res);
};
