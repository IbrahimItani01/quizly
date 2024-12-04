import React, { useEffect } from "react";
import Logo from "../../logo.svg";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import QuizButton from "../QuizButton/QuizButton";
import { useSelector, useDispatch } from "react-redux";
import { setQuizzes, setQuestions } from "../../redux/slices/quizSlice"; import { mockQuestions, mockQuizzes } from "../../mock/quizzes";

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const quizzes = useSelector((state) => state.quiz.quizzes);
  const user = useSelector((state) => state.user);

  const token = localStorage.token;

    useEffect(() => {
    dispatch(setQuizzes(mockQuizzes));     for (const quizId in mockQuestions) {
      dispatch(setQuestions({ quizId, questions: mockQuestions[quizId] }));     }
  }, []);
  

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    toast.info("See Ya 👋");
  };

  return (
    <div className="side-nav">
      <div className="side-logo">
        <img src={Logo} alt="logo" width={40} />
        <h2>Quizly</h2>
      </div>
      <div className="side-bar">
        {quizzes.length ? (
          token ? (
            quizzes.map((quiz) => (
              <QuizButton
                key={quiz.id}
                data={quiz}
                completed={user?.completedQuizzes?.includes(quiz.id)}               />
            ))
          ) : (
            <p>Create an account first 👀</p>
          )
        ) : (
          <p>Oops no quizzes yet 👀</p>
        )}
      </div>
      <div className="footer">
        {token ? (
          <LogOut className="logout-icon" onClick={handleLogout} />
        ) : (
          <em>Developed by Ibrahim Itani</em>
        )}
      </div>
    </div>
  );
};

export default SideNav;
