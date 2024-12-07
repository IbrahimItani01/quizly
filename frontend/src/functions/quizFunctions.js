import { toast } from "react-toastify";
import { Howl } from "howler"; 
import CorrectAudio from "../assets/audio/correct_answer.mp3";
import WrongAudio from "../assets/audio/wrong_answer.mp3";
import FinishAudio from "../assets/audio/succeeded_score.mp3";


const sounds = {
  correct: new Howl({ src: [CorrectAudio], volume: 0.8 }),
  wrong: new Howl({ src: [WrongAudio], volume: 0.8 }),
  completed: new Howl({ src: [FinishAudio], volume: 0.8 }),
};

export const submitQuestion = async (
  quizCompleted,
  quizQuestions,
  currentQuestionIndex,
  userAnswer,
  setCurrentQuestionIndex,
  setUserAnswer,
  setUser,
  setQuizCompleted,
  markQuizCompleted,
  navigate,
  id,
  updateScore // Backend score updater
) => {
  if (quizCompleted) return; 

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (
    (currentQuestion.type === "multiple-choice" && !userAnswer) ||
    (currentQuestion.type === "user-input" && userAnswer.trim() === "")
  ) {
    toast.info("Please answer the question 🧙‍♂️");
    return;
  }

  // Determine if the answer is correct
  const isCorrect =
    currentQuestion.type === "multiple-choice"
      ? userAnswer === currentQuestion.correctAnswer
      : userAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase();

  if (isCorrect) {
    toast.success("Correct! 🎯");
    sounds.correct.play();

    // Update score in the backend
    try {
      const incrementValue = 10; // Define points for a correct answer
      await updateScore(incrementValue)
    } catch (error) {
      console.error("Failed to update score in backend:", error);
    }

    // Update score in the UI
    setUser((prevUser) => ({
      ...prevUser,
      score: (prevUser.score || 0) + 10,
    }));
  } else {
    toast.error("Wrong answer! 😔");
    sounds.wrong.play();
  }

  // Move to the next question or finish the quiz
  if (currentQuestionIndex < quizQuestions.length - 1) {
    setCurrentQuestionIndex((prev) => prev + 1);
    setUserAnswer(""); // Clear the answer field
  } else {
    setQuizCompleted(true);
    markQuizCompleted(id);
    toast.success("Quiz completed! 🥳");
    sounds.completed.play();

    // Update completed quizzes in the user object
    setUser((prevUser) => ({
      ...prevUser,
      completedQuizzes: [...(prevUser.completedQuizzes || []), parseInt(id)],
    }));

    // Redirect to panel after completion
    setTimeout(() => navigate("/panel"), 3000);
  }
};



