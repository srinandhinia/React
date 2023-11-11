export default function GameOver({ winner, rematchFunc }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a Draw</p>}
      <button onClick={rematchFunc}>Rematch</button>
    </div>
  );
}
