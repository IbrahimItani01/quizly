import { toast } from "react-toastify";
import { Howl } from "howler"; import { updateScore, markQuizCompleted } from "../redux/slices/userSlice"; import CorrectAudio from "../assets/audio/correct_answer.mp3";
import WrongAudio from "../assets/audio/wrong_answer.mp3";
import FinishAudio from "../assets/audio/succeeded_score.mp3";


const sounds = {
  correct: new Howl({ src: [CorrectAudio], volume: 0.8 }),
  wrong: new Howl({ src: [WrongAudio], volume: 0.8 }),
  completed: new Howl({ src: [FinishAudio], volume: 0.8 }),
};

export const submitQuestion = (
  quizCompleted,
  quizQuestions,
  currentQuestionIndex,
  userAnswer,
  setCurrentQuestionIndex,
  setUserAnswer,
  dispatch,   navigate,
  id
) => {
  if (quizCompleted) return; 
  const currentQuestion = quizQuestions[currentQuestionIndex];

    if (
    (currentQuestion.type === "multiple-choice" && !userAnswer) ||     (currentQuestion.type === "user-input" && userAnswer.trim() === "")   ) {
    toast.info("You shall answer 🧙‍♂️");
    return;
  }

    if (
    (currentQuestion.type === "multiple-choice" &&
      userAnswer === currentQuestion.correctAnswer) ||
    (currentQuestion.type === "user-input" &&
      userAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase())
  ) {
    toast.success("Bravo! 🥳 You nailed it! 🎯");
    sounds.correct.play();
    dispatch(updateScore(10));   } else {
    toast.error("Ooops Wrong Answer 😔");
    sounds.wrong.play();   }

    if (currentQuestionIndex < quizQuestions.length - 1) {
    setCurrentQuestionIndex((prev) => prev + 1);
    setUserAnswer("");   } else {
    toast.success("Quiz Complete 🥳");
    sounds.completed.play();     dispatch(markQuizCompleted(parseInt(id)));     setTimeout(() => {
      navigate("/panel");
    }, 3000);
  }
};
