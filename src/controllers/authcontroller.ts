import { Request, Response } from "express";
import { Registerservice } from "../services/authservice";
import { Loginservice } from "../services/authservice";
import { logoutservice } from "../services/authservice";



export const registerController = async (req: Request, res: Response) => {
  const result = await Registerservice(req, res);
  return result;
};
export const loginController = async (req: Request, res: Response) => {
  const result = await Loginservice(req, res);
  return result;
};
export const logoutController = async (req: Request, res: Response) => {
  const result = await logoutservice(req, res);
  return result;
};
