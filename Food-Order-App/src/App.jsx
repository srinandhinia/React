import Header from "./Components/Header";
import AvailableMeals from "./Components/AvailableMeals";
import { useState, useRef } from "react";
import CartContextProvider from "./store/Food-App-Context";

function App() {
  const [cartValue, setCartValue] = useState(0);

  function handleUpdateCartValue(name, selectedMeals) {
    const mealAlreadyExists = selectedMeals.some((meal) => meal.name === name);

    setCartValue((prevCartValue) => {
      if (!selectedMeals.length) return prevCartValue + 1;
      return mealAlreadyExists ? prevCartValue : prevCartValue + 1;
    });
  }

  return (
    <CartContextProvider>
      <Header cartValue={cartValue} />
      <AvailableMeals onSelect={handleUpdateCartValue} />
    </CartContextProvider>
  );
}

export default App;
