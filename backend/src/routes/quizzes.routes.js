import express from "express";
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../controllers/quiz.controller.js";
import authenticateJWT from "../middlewares/jwt.middleware.js";

const router = express.Router();

router.get("/", getAllQuizzes);

router.get("/:id",authenticateJWT, getQuizById);

router.post("/",authenticateJWT, createQuiz);

router.put("/:id",authenticateJWT, updateQuiz);

router.delete("/:id",authenticateJWT, deleteQuiz);

export default router;
