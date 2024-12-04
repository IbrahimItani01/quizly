import React, { useContext } from "react";
import Logo from "../../logo.svg";
import { quizContext } from "../../context/QuizContext";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import QuizButton from "../QuizButton/QuizButton";
const SideNav = () => {
  const { quizzes } = useContext(quizContext);
  const token = localStorage.token;
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/")
    toast.info("See Ya 👋")
  }
  return (
    <div className="side-nav">
      <div className="side-logo">
        <img src={Logo} alt="logo" width={40} />
        <h2>Quizly</h2>
      </div>
      <div className="side-bar">
        {quizzes ? (
          token ? (
            quizzes.map((quiz) => <QuizButton data={quiz}/>)
          ) : (
            <p>Create an account first 👀</p>
          )
        ) : (
          <p>Oops no quizzes yet 👀</p>
        )}
      </div>
      <div className="footer">
        {token?(
          <LogOut className="logout-icon" onClick={handleLogout}/>
        ):(
          <em>Developed by Ibrahim Itani</em>
        )}
      </div>
    </div>
  );
};

export default SideNav;
