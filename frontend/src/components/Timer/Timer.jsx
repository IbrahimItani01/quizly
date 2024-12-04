import React from "react";
import "./style.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
const Timer = ({ handleSubmitAnswer }) => {
  return (
    <div className="timer">
      <CountdownCircleTimer
        isPlaying
        duration={15}
        colors={["#009402", "#F7B801", "#A30000"]}
        colorsTime={[10, 5, 0]}
        onComplete={() => {
          handleSubmitAnswer();
          return { shouldRepeat: true };
        }}
      >
        {({ remainingTime }) => <h4>Time Left: {remainingTime}s</h4>}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
