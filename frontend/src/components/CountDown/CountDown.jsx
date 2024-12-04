import React from "react";
import "./style.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const CountDown = ({handleCountdownComplete}) => {
  return (
    <div className="countdown">
      <CountdownCircleTimer
        isPlaying
        duration={5}
        colors="#009402"
        onComplete={handleCountdownComplete}
      >
        {({ remainingTime }) => <h3>{remainingTime}</h3>}
      </CountdownCircleTimer>
      <h2>Sharpen Your Mind 🧠</h2>
    </div>
  );
};

export default CountDown;
