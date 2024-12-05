import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/routes/users.routes.js";
import quizRoutes from "./src/routes/quizzes.routes.js";

dotenv.config();

