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
  const { id } = useParams(); // Quiz ID
  const { quizzes, markQuizCompleted } = useContext(quizContext);
  const { setUser,updateScore } = useContext(userContext);

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    if (quizzes && quizzes.length > 0) {
      const currentQuiz = quizzes.find((quiz) => quiz._id ===id);
      if (currentQuiz) {
        setQuizQuestions(currentQuiz.questions || []);
      } else {
        console.error("Quiz not found!");
        setQuizQuestions([]);
      }
    }
  }, [quizzes, id]);

  const handleCountdownComplete = () => {
    setShowCountdown(false);
  };

  const handleSubmitAnswer = () => {
    submitQuestion(
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
      updateScore 
    );
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
          {!quizCompleted ? (
            <>
              <Question
                quizQuestions={quizQuestions}
                currentQuestionIndex={currentQuestionIndex}
                setUserAnswer={setUserAnswer}
                userAnswer={userAnswer}
              />
              <Button
                onClick={handleSubmitAnswer}
                design="outline"
                text="Answer"
              />
              <Timer handleSubmitAnswer={handleSubmitAnswer} />
            </>
          ) : (
            <p>Quiz completed! Redirecting to panel... 🎉</p>
          )}
        </div>
      ) : (
        <p>Loading quiz 🥸</p>
      )}
    </div>
  );
};

export default Quiz;
