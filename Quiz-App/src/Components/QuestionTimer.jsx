import { useState, useEffect } from "react";
export default function QuestionTimer({ timer, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("SET TIME OUT");
    const timeout = setTimeout(() => {
      onTimeOut(null);
    }, timer);
    return () => {
      clearTimeout(timeout);
    };
  }, [onTimeOut, timer]);

  useEffect(() => {
    console.log("SET INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingtime) => prevRemainingtime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="progress-time" value={remainingTime} max={timer}></progress>
  );
}
