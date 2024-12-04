import React, { useContext, useEffect, useState } from "react";
import { quizContext } from "../../context/QuizContext";
import { userContext } from "../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import CountDown from "../CountDown/CountDown";
import Question from "../Question/Question";
import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import "./style.css";
import { submitQuestion } from "../../functions/quizFunctions";

const Quiz = () => {
  const { id } = useParams();
  const { questions, markQuizCompleted } = useContext(quizContext);
  const { setUser } = useContext(userContext);

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false); // New state

  const navigate = useNavigate();

  // Fetch quiz questions when quiz id changes
  useEffect(() => {
    setQuizQuestions(questions[parseInt(id)]);
  }, [questions, id]);

  // Countdown logic before showing the quiz
  const handleCountdownComplete = () => {
    setShowCountdown(false);
    setQuizStarted(true);
  };

  // Handle submission of an answer
  const handleSubmitAnswer = () => {
    if (quizCompleted) return; // Prevent further actions if quiz is completed

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Check if an answer is provided
    if (
      (currentQuestion.type === "multiple-choice" && !userAnswer) || // No option selected for multiple-choice
      (currentQuestion.type === "user-input" && userAnswer.trim() === "") // Input field is empty
    ) {
      toast.info("You shall answer 🧙‍♂️");
      return;
    }

    // Check if the answer is correct
    if (
      (currentQuestion.type === "multiple-choice" &&
        userAnswer === currentQuestion.correctAnswer) ||
      (currentQuestion.type === "user-input" &&
        userAnswer.trim().toLowerCase() ===
          currentQuestion.correctAnswer.trim().toLowerCase())
    ) {
      toast.success("Bravo! 🥳 You nailed it! 🎯");
      sounds.correct.play();
      updateScore();
    } else {
      toast.error("Ooops Wrong Answer 😔");
      sounds.wrong.play(); // Play wrong answer sound
    }

    // Move to the next question or finish the quiz
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setUserAnswer(""); // Reset the input field
    } else {
      setQuizCompleted(true); // Mark the quiz as completed
      markQuizCompleted(parseInt(id));
      toast.success("Quiz Complete 🥳");
      sounds.completed.play(); // Play quiz completion sound
      setUser((prevUser) => ({
        ...prevUser,
        completedQuizzes: [...(prevUser.completedQuizzes || []), parseInt(id)],
      }));
      setTimeout(() => {
        navigate("/panel");
      }, 3000);
    }
  };

  // Update user score in context
  const updateScore = () => {
    setUser((prevUser) => ({
      ...prevUser,
      score: prevUser.score + 10, // Add 10 points per correct answer
    }));
  };

  // Calculate progress
  const progress =
    currentQuestionIndex >= quizQuestions.length - 1
      ? 100
      : Math.round((currentQuestionIndex / quizQuestions.length) * 100);

  return (
    <div className="quiz-container">
      {showCountdown ? (
        <CountDown handleCountdownComplete={handleCountdownComplete} />
      ) : quizQuestions.length > 0 ? (
        <div className="question-section">
          <ProgressBar
            completed={progress}
            bgColor="#009402"
            height="20px"
            labelAlignment="center"
            labelColor="#14281d"
            baseBgColor="#ffff"
            className="progress-bar"
            barContainerClassName="progress-container"
          />
          <Question
            quizQuestions={quizQuestions}
            currentQuestionIndex={currentQuestionIndex}
            setUserAnswer={setUserAnswer}
            userAnswer={userAnswer}
          />
          <Button
            onClick={handleSubmitAnswer}
            design={"outline"}
            text={"Answer"}
          />
          <Timer handleSubmitAnswer={handleSubmitAnswer} />
        </div>
      ) : (
        <p>Loading quiz 🥸</p>
      )}
    </div>
  );
};

export default Quiz;
