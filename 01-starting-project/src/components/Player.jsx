import { useState, useRef } from "react";
import TimerChallenge from "./TimerChallenge";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState();
  const playerName = useRef();

  function handleClickSubmit() {
    setPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <>
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClickSubmit}>Set Name</button>
        </p>
      </section>
      <div className="max-w-xl mx-auto my-12 flex flex-wrap gap-2">
        <TimerChallenge targetTime={1}>EASY</TimerChallenge>
        <TimerChallenge targetTime={5}>NOT EASY</TimerChallenge>
        <TimerChallenge targetTime={10}>MODERATE</TimerChallenge>
        <TimerChallenge targetTime={20}>ABOVE MODERATE</TimerChallenge>
      </div>
    </>
  );
}
//
