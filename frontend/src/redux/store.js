import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../redux/slices/quizSlice";
import userReducer from "../redux/slices/userSlice";
export default configureStore({
  reducer: {
    quiz: quizReducer,
    user: userReducer,
  },
});
