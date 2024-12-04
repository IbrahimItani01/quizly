import React from 'react';
import './style.css';

const Question = ({ quizQuestions, currentQuestionIndex, setUserAnswer, userAnswer }) => {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="question-container">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>

      {currentQuestion.type === 'multiple-choice' ? (
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option}
                  checked={userAnswer === option} // Ensure the state reflects the selected answer
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <input
          type="text"
          placeholder="Type your answer here"
          name={`question-${currentQuestion.id}`}
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
      )}
    </div>
  );
};

export default Question;
