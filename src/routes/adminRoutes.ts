import express from 'express';
import { roleCheck } from '../middlewares/roleMiddleware'; // import role check 


const router = express.Router();

// Admin dashboard - only accessible to admin role
router.get('/dashboard',  roleCheck(['admin']), (req, res) => {
  res.json({
    success: true,
    message: "Welcome to admin dashboard",
    user: (req as any).user,
  });
});




export default router;