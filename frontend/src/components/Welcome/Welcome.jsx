import React from "react";
import "./style.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  const handleNavigate = (e)=>{
    e.target.textContent === "Login" ? navigate("/login"): navigate("/register")
  }
  return (
    <div className="welcome-page">
      <div className="welcome-title">
        <h1>Are you ready?</h1>
        <h2>Quizly says: Sharpen your pencil ✏️</h2>
      </div>
      <div className="welcome-actions">
        <Button text={"Login"} design={"outline"} onClick={handleNavigate} />
        <Button text={"get started"} design={"action"} onClick={handleNavigate} />
      </div>
    </div>
  );
};

export default Welcome;
