import { createContext, useReducer } from "react";

export const CartContext = createContext({
  selectedMeals: [],
  addItemToCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    let updatedMeals;
    if (
      state.selectedMeals.some(
        (prevMeal) => prevMeal.name === action.payload.name
      )
    ) {
      return {
        selectedMeals: state.selectedMeals.map((prevMeal) =>
          prevMeal.name === action.payload.name
            ? { ...prevMeal, quantity: prevMeal.quantity + 1 }
            : prevMeal
        ),
      };
    } else {
      return {
        selectedMeals: [
          ...state.selectedMeals,
          { ...action.payload, quantity: 1 },
        ],
      };
    }
  }
}

export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    selectedMeals: [],
  });
  function handleAddItemToCart(mealName, price) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: {
        name: mealName,
        price: price,
      },
    });
  }

  const cartCntxt = {
    selectedMeals: cartState.selectedMeals,
    addItemToCart: handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={cartCntxt}>{children}</CartContext.Provider>
  );
}
