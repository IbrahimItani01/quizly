import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);
router.put("/:id/score",authenticateJWT, updateUserScore);
router.put("/:id/complete", authenticateJWT,markQuizCompleted);
router.delete("/:id", deleteUser);

export default router;
