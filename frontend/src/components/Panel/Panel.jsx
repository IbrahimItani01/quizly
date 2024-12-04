import React from "react";
import "./style.css";
import { ArrowBigLeft, ArrowBigUp } from "lucide-react";
const Panel = () => {
  return (
    <div className="panel-section">
      <div className="quizzes-hint hint">
        <p>Here are your quizzes click on one to take it 💪</p>
        <ArrowBigLeft width={100} />
      </div>
      <div className="score-hint hint">
        <ArrowBigUp width={100} />
        <p>Here is your score, make sure to increase it 😉</p>
      </div>
      <div className="motivation">
        <h1>We believe in you 🤟</h1>
        <p>BTW: There is a timer on quizzes ⏱️</p>
      </div>
    </div>
  );
};

export default Panel;
