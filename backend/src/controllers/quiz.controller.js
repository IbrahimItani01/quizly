import Quiz from "../models/quiz.model.js";

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching quizzes", error: error.message });
  }
};

