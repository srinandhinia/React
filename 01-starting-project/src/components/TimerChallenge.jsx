import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ targetTime, children }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  function handleStartChallenge() {
    timer.current = setInterval(() => {
      setTimeRemaining((previousTime) => previousTime - 10);
    }, 10);
  }

  const timerIsActive = timeRemaining < targetTime * 1000 && timeRemaining > 0;

  function handleStopChallenge() {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result={timerIsActive ? "" : "You Lost!"}
        targetTime={targetTime}
      ></ResultModal>
      <section className="w-88 flex flex-col items-center justify-center p-8 mx-auto my-8 text-black bg-gradient-to-b from-teal-500 to-teal-700 rounded-md shadow-black">
        <h2 className="font-bold text-lg tracking-widest">{children}</h2>
        <p className="px-2 py-1 m-2 border  border-gray-500">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            className="px-2 py-1 m-2 rounded text-teal-50 bg-black"
            onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={`p-2 ${timerIsActive ? "animate-bounce" : ""}`}>
          {timerIsActive ? "Timer is running" : "Timer In-active"}
        </p>
      </section>
    </>
  );
}
