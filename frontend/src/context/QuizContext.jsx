import React, { createContext, useState } from "react";
import { mockQuestions, mockQuizzes } from "../mock/quizzes.js";

export const quizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(mockQuizzes);
  const [questions,setQuestions] = useState(mockQuestions);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  const markQuizCompleted = (id) => {
    setCompletedQuizzes((prev) => [...new Set([...prev, id])]);
  };
  return (
    <quizContext.Provider value={{ quizzes, completedQuizzes, markQuizCompleted ,questions}}>
      {children}
    </quizContext.Provider>
  );
};
