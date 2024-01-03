import Header from "./Components/Header";
import AvailableMeals from "./Components/AvailableMeals";
import { useState, useRef } from "react";
import CartContextProvider from "./store/Food-App-Context";
import { CartContext } from "./store/Food-App-Context";
import { useContext } from "react";
function App() {
  const [cartValue, setCartValue] = useState(0);
  const { addItemToCart } = useContext(CartContext);

  function handleUpdateCartValue() {
    setCartValue((prevCartValue) => prevCartValue + 1);
  }

  return (
    <CartContextProvider>
      <Header cartValue={cartValue} />
      <AvailableMeals onSelect={handleUpdateCartValue} />
    </CartContextProvider>
  );
}

export default App;
