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
  const progress = Math.round((currentQuestionIndex / quizQuestions.length) * 100);

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
            <input
              type="text"
              placeholder="Type your answer here"
              name={`question-${quizQuestions[currentQuestionIndex].id}`}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          )}

          {/* Submit Button */}
          <button onClick={handleSubmitAnswer}>Submit Answer</button>

          {/* Timer for each question */}
          <div className="timer">
            <CountdownCircleTimer
              isPlaying
              duration={15} // Duration for each question
              colors={["#218380", "#F7B801", "#A30000"]}
              colorsTime={[10, 5, 0]} // Change colors based on remaining time
              onComplete={handleSubmitAnswer} // Automatically submit answer when time runs out
            >
              {({ remainingTime }) => <h4>Time Left: {remainingTime}s</h4>}
            </CountdownCircleTimer>
          </div>
        </div>
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
};

export default Quiz;
