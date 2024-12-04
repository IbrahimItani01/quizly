import React, { useEffect } from "react";
import "./style.css";
import { CheckCircle, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
const QuizButton = ({ data, completed }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${data.id}`);
  };
useEffect(()=>{
  console.log(completed);
},[completed])
  return (
    <div className={`quiz-btn ${completed ? "completed" : ""}`} onClick={completed?()=>{}:handleNavigate}>
      <div className="btn-title">
      {completed ? <CheckCircle color="#009402" /> : <FileText />}
      <p>{data.title}</p>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default QuizButton;
