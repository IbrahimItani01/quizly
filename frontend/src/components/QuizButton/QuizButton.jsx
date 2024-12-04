import React from "react";
import "./style.css";
import { FileText } from "lucide-react";
const QuizButton = ({ data }) => {
  return (
    <div className="quiz-btn">
      <div className="btn-title">
        <FileText />
        <p>{data.title}</p>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default QuizButton;
