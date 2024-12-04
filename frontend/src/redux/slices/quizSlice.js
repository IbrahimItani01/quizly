import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: [], 
    currentQuiz: null, 
    currentQuizId: null,
    questions: {}, 
    currentQuestionIndex: 0, 
    userAnswers: {}, 
    quizCompleted: false, 
  },
  reducers: {
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;     },
    setQuestions: (state, action) => {
        const { quizId, questions } = action.payload;
        state.questions[quizId] = questions;       },
      
    selectQuiz: (state, action) => {
      const quizId = action.payload;
      state.currentQuizId = quizId;
      state.currentQuiz = state.quizzes.find((quiz) => quiz.id === quizId);
    },
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userAnswers[questionId] = answer;     },
    nextQuestion: (state) => {
            if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.quizCompleted = true;       }
    },
    markQuizCompleted: (state) => {
      if (state.currentQuiz) {
        state.currentQuiz.completedBy.push(state.currentQuizId);       }
      state.quizCompleted = true;
    },
  },
});

export const {
  setQuizzes,
  setQuestions,
  selectQuiz,
  answerQuestion,
  nextQuestion,
  markQuizCompleted,
} = quizSlice.actions;

export default quizSlice.reducer;
