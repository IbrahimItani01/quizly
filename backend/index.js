import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/routes/users.routes.js";
import quizRoutes from "./src/routes/quizzes.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection failed:", error));

app.use("/api/users", userRoutes);
app.use("/api/quizzes", quizRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
