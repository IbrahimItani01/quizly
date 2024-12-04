import React, { createContext, useState } from "react";
import { mockQuizzes } from "../mock/quizzes.js";

export const quizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(mockQuizzes);

  return (
    <quizContext.Provider value={{ quizzes }}>
      {children}
    </quizContext.Provider>
  );
};
