import React, { createContext, useState, useEffect } from "react";
import {getAllQuizzes } from "../apis/quizzes";
import { completeQuiz } from "../apis/users";

export const quizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const token = localStorage.token;
      try {
        const fetchedQuizzes = await getAllQuizzes(token);
        console.log(fetchedQuizzes);
        setQuizzes(fetchedQuizzes);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  const markQuizCompleted = async (quizId) => {
    const token = localStorage.token;
    try {
      await completeQuiz(quizId, token); // Call API to mark quiz as completed
      setCompletedQuizzes((prev) => [...new Set([...prev, quizId])]);
    } catch (error) {
      console.error("Error marking quiz as completed:", error);
    }
  };

  return (
    <quizContext.Provider value={{ quizzes, completedQuizzes, markQuizCompleted ,questions}}>
      {children}
    </quizContext.Provider>
  );
};
