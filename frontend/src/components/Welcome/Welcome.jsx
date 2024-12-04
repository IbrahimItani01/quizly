import React from "react";
import "./style.css";
import Button from "../Button/Button";
const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-title">
        <h1>Are you ready?</h1>
        <h2>Quizly says: Sharpen your pencil ✏️</h2>
      </div>
      <div className="welcome-actions">
        <Button text={"Login"} design={"outline"} />
        <Button text={"get started"} design={"action"} />
      </div>
    </div>
  );
};

export default Welcome;
