import { useState } from "react";

export default function Player({ name, symbol, isActive, onSelect }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditName() {
    setIsEditing((editing) => !editing);
    if (isEditing) onSelect(symbol, playerName);
  }
  const handleChangeName = (event) => {
    setPlayerName(event.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChangeName}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditName}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
