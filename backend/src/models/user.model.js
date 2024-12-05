import mongoose from "mongoose";

const { Schema, model } = mongoose;


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true }, 
  score: { type: Number, default: 0 }, 
  completedQuizzes: [
    {
      quizId: { type: mongoose.Types.ObjectId, ref: "Quiz" }, 
      score: { type: Number, required: true }, 
      completedAt: { type: Date, default: Date.now }, 
    },
  ],
}, {
  timestamps: true, 
});


const User = model("User", userSchema);

export default User;
