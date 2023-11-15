import { useState } from "react";
export default function User_Input({ label }) {
  const [inputField, setInputField] = useState({ label: "" });
  function handleEditInputField(event) {
    setInputField(event.target.value);
    console.log(event.target);
  }
  return (
    <input
      type="textbox"
      value={inputField.label}
      onChange={handleEditInputField}
    ></input>
  );
}
