import React, { createContext, useState } from "react";
import { mockQuizzes } from "../mock/quizzes.js";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(mockQuizzes);

  return (
    <QuizContext.Provider value={{ quizzes }}>
      {children}
    </QuizContext.Provider>
  );
};
