import React from "react";
import { Star } from "lucide-react";
import { useSelector } from "react-redux";

const StatBar = () => {
  const user = useSelector((state) => state.user);
  const token = localStorage.token;

  console.log("User Data:", user); 
  return (
    <div className="stat-bar">
      <h1>✏️ Welcome, {user && token ? user.name : "Human"}!</h1>
      {user && token ? (
        <div className="stats-section">
          <p>Score: {typeof user.score === "number" ? user.score : 0}</p>
          <Star fill="#009402" color="" />
        </div>
      ) : (
        <p>No score yet 🤭</p>
      )}
    </div>
  );
};

export default StatBar;
