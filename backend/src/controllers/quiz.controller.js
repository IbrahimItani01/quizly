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

export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching quiz", error: error.message });
  }
};

export const createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;

  try {
    const newQuiz = new Quiz({
      title,
      description,
      questions,
    });

    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating quiz", error: error.message });
  }
};

