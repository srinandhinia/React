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
      <div className="max-w-3xl mx-auto my-12 flex flex-wrap gap-2">
        <TimerChallenge title="EASY" targetTime={1}></TimerChallenge>
        <TimerChallenge title="NOT EASY" targetTime={5}></TimerChallenge>
        <TimerChallenge title="MODERATE" targetTime={10}></TimerChallenge>
        <TimerChallenge title="ABOVE MODERATE" targetTime={20}></TimerChallenge>
      </div>
    </>
  );
}
