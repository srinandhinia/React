import Header from "./Components/Header";
import User_Input from "./Components/User_Input";
import Results from "./Components/Results";
import { useState } from "react";

function App() {
  const [inputField, setInputField] = useState({
    initialInvestment: 6000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidDuration = inputField.duration >= 1;

  function handleEditInputField(labelName, input) {
    setInputField((prevInputs) => {
      return { ...prevInputs, [labelName]: +input };
    });
  }

  return (
    <>
      <Header />
      <User_Input input={inputField} onChangeInput={handleEditInputField} />
      {isValidDuration ? (
        <Results inputLogs={inputField} />
      ) : (
        <p className="center">Please enter duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
