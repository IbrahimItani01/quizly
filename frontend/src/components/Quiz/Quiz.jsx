import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import CountDown from "../CountDown/CountDown";
import Question from "../Question/Question";
import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import "./style.css";
import { updateScore, markQuizCompleted } from "../../redux/slices/userSlice";
import { submitQuestion } from "../../functions/quizFunctions";

const Quiz = () => {
  const { id } = useParams();   const dispatch = useDispatch();
  const navigate = useNavigate();

    const questions = useSelector((state) => state.quiz.questions[id] || []);
  const user = useSelector((state) => state.user);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false); 
    const handleCountdownComplete = () => {
    setShowCountdown(false);
  };

    const handleSubmitAnswer = () => {
    submitQuestion(
      quizCompleted,
      questions,
      currentQuestionIndex,
      userAnswer,
      setCurrentQuestionIndex,
      setUserAnswer,
      dispatch,       navigate,
      id
    );
  };
  

    const progress =
    currentQuestionIndex >= questions.length - 1
      ? 100
      : Math.round((currentQuestionIndex / questions.length) * 100);

  return (
    <div className="quiz-container">
      {showCountdown ? (
        <CountDown handleCountdownComplete={handleCountdownComplete} />
      ) : questions.length > 0 ? (
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
            quizQuestions={questions}
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
