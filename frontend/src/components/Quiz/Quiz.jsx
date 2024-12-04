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
      id
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
