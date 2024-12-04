import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: -1,
    name: null,
    email: "",
    password: "",
    score: 0,     completedQuizzes: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.score = action.payload.score;
      state.completedQuizzes = action.payload.completedQuizzes || [];
    },
    updateScore: (state, action) => {
        state.score += action.payload.payload;
  
    },
    markQuizCompleted: (state, action) => {
      state.completedQuizzes.push(action.payload);
    },
  },
});

export const { setUser, updateScore, markQuizCompleted } = userSlice.actions;
export default userSlice.reducer;
