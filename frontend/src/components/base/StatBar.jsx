import React, { useContext } from "react";
import { Star } from "lucide-react";
import { userContext } from "../../context/UserContext";
const StatBar = () => {
  const { name, score } = useContext(userContext);
  const token = localStorage.token
  return (
    <div className="stat-bar">
      <h1>✏️ Welcome, {name && localStorage.token ? name : "Human"}!</h1>
      {score && token ? (
        <div className="stats-section">
          <p>Score: {score}</p>
          <Star fill="#009402" color="" />
        </div>
      ) : (
        <p>No score yet 🤭</p>
      )}
    </div>
  );
};

export default StatBar;
