import React, { useContext } from "react";
import { Star } from "lucide-react";
import { userContext } from "../../context/UserContext";

const StatBar = () => {
  const { user } = useContext(userContext); // Access the user object from context
  const token = localStorage.token;

  return (
    <div className="stat-bar">
      <h1>✏️ Welcome, {user && token ? user.name : "Human"}!</h1>
      {user && user.score && token ? (
        <div className="stats-section">
          <p>Score: {user.score}</p>
          <Star fill="#009402" color="" />
        </div>
      ) : (
        <p>No score yet 🤭</p>
      )}
    </div>
  );
};

export default StatBar;
