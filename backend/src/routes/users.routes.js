import express from "express";
import {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUserScore,
  markQuizCompleted,
  deleteUser,
} from "../controllers/user.controller.js";
import authenticateJWT from "../middlewares/jwt.middleware.js";

const router = express.Router();

router.get("/",getAllUsers);
router.get("/me", authenticateJWT, getUserById);
router.post("/register", registerUser); 
router.post("/login", loginUser); 
router.put("/:id/score",authenticateJWT, updateUserScore);
router.put("/:id/complete", authenticateJWT,markQuizCompleted);
router.delete("/:id", deleteUser);

export default router;
