import mongoose from "mongoose";

const { Schema, model } = mongoose;


const questionSchema = new Schema({
  id: { type: Number, required: true },
  question: { type: String, required: true },
  type: { type: String, enum: ["multiple-choice", "user-input"], required: true },
  options: { type: [String], required: function () { return this.type === "multiple-choice"; } },
  correctAnswer: { type: String, required: true },
});


const quizSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: { type: [questionSchema], required: true }, 
  completedBy: { type: [mongoose.Types.ObjectId], ref: "User" }, 
}, {
  timestamps: true, 
});


