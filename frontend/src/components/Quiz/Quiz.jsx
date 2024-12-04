import React, { useContext, useEffect, useState } from "react";
import { quizContext } from "../../context/QuizContext";
import { userContext } from "../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ProgressBar from "@ramonak/react-progress-bar";
import CorrectAudio from "../../assets/audio/correct_answer.mp3";
import WrongAudio from "../../assets/audio/wrong_answer.mp3";
import FinishAudio from "../../assets/audio/succeeded_score.mp3";
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
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Check if the answer is correct
    if (
      (currentQuestion.type === "multiple-choice" &&
        userAnswer === currentQuestion.correctAnswer) ||
      (currentQuestion.type === "user-input" &&
        userAnswer.trim().toLowerCase() ===
          currentQuestion.correctAnswer.trim().toLowerCase())
    ) {
      updateScore();
    }

    // Move to the next question or finish the quiz
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setUserAnswer(""); // Reset the input field
    } else {
      markQuizCompleted(parseInt(id));
      alert("Quiz Complete!");
      navigate("/complete"); // Optionally, navigate to a results or summary page
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
          {/* Progress Bar */}
          <ProgressBar
            completed={progress}
            bgColor="#6A2C70"
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
