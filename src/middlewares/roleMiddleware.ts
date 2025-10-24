import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayloadInput } from "../types/userType";



export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
    email: string;
    userName: string;
  };
}
export const roleCheck = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader?.startsWith("Bearer ")) {
        return res
          .status(401)
          .json({ message: "Unauthorized: No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const secret = process.env.JWT_SECRET!;
      const decoded = jwt.verify(token, secret) as JwtPayloadInput;
      // CRITICAL: Rebuild req.user with ONLY these fields – hides iat/exp forever
      const sanitizedUser = {
        id: decoded.id,
        role: decoded.role,
        email: decoded.email,
        userName: decoded.userName,
        // If more fields in payload/response, add here: e.g., firstName: decoded.firstName
      };
      
      console.log(decoded.role)

      if (!allowedRoles.includes(decoded.role)) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient role" });
      }
      console.log(sanitizedUser);
      (req as any).user = sanitizedUser;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
};

// create role middleware here then go to define routes for Admin