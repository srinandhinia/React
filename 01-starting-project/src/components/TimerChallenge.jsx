import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ targetTime, title }) {
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
    dialog.current.open();
    clearInterval(timer.current);
  }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function reset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        leftOverTime={timeRemaining}
        onReset={reset}
      ></ResultModal>
      <div className="w-80 flex flex-col items-center justify-center p-8 mx-auto my-8 text-black bg-gradient-to-b from-teal-500 to-teal-700 rounded-md shadow-black">
        <div className=" text-center overflow-hidden font-bold text-lg m-0 tracking-widest">
          <h2>{title}</h2>
        </div>
        <div className="px-2 py-1 m-2 border  border-gray-500">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </div>
        <div>
          <button
            className="px-2 py-1 m-2 rounded text-teal-50 bg-black"
            onClick={timerIsActive ? handleStopChallenge : handleStartChallenge}
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </div>
        <div className={`p-2 ${timerIsActive ? "animate-bounce" : ""}`}>
          {timerIsActive ? "Timer is running" : "Timer In-active"}
        </div>

        {/* <div className="w-30 h-10 flex flex-wrap">
          <h2 className="font-bold text-lg m-0 tracking-widest">{title}</h2>
        </div>

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
        </p> */}
      </div>
    </>
  );
}
