import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const PLAYERS = { X: "Player 1", O: "Player 2" };
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let curPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    curPlayer = "O";
  }
  return curPlayer;
}

function deriveGameBoard(gameTurns) {
  // deep copy
  let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    // console.log(player);
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      return players[firstSquareSymbol];
  }
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const draw = gameTurns.length === 9 && !winner;

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let curPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function rematch() {
    setGameTurns([]);
  }

  function handlePlayersNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onSelect={handlePlayersNameChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onSelect={handlePlayersNameChange}
          />
        </ol>
        {(winner || draw) && <GameOver winner={winner} rematchFunc={rematch} />}
        <GameBoard onSelect={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
