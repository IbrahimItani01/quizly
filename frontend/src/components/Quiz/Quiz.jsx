import React, { useContext, useEffect, useState } from "react";
import { quizContext } from "../../context/QuizContext";
import { userContext } from "../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ProgressBar from "@ramonak/react-progress-bar";
// TODO: revamp
const Quiz = () => {
  const { questions, markQuizCompleted } = useContext(quizContext);
  const { user, setUser } = useContext(userContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showCountdown, setShowCountdown] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  return (
    <div className="quiz-container">
      {showCountdown ? (
        <div className="countdown">
          <h2>Get ready for the quiz!</h2>
          <CountdownCircleTimer
            isPlaying
            duration={3}
            colors="#6A2C70"
            onComplete={handleCountdownComplete}
          >
            {({ remainingTime }) => <h3>{remainingTime}</h3>}
          </CountdownCircleTimer>
        </div>
      ) : quizQuestions.length > 0 ? (
        <div className="question-section">
          {/* Progress Bar */}
          <ProgressBar
            completed={progress}
            bgColor="#6A2C70"
            height="20px"
            labelAlignment="center"
            labelColor="#fff"
            baseBgColor="#ddd"
          />

          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{quizQuestions[currentQuestionIndex].question}</p>

          {quizQuestions[currentQuestionIndex].type === "multiple-choice" ? (
            <ul>
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${quizQuestions[currentQuestionIndex].id}`}
                        value={option}
                        onChange={(e) => setUserAnswer(e.target.value)}
                      />
                      {option}
                    </label>
                  </li>
                )
              )}
            </ul>
          ) : (
