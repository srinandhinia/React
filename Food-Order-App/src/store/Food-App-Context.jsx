import { createContext, useReducer } from "react";

export const CartContext = createContext({
  selectedMeals: [],
  addItemToCart: () => {},
  deleteItemFromCart: () => {},
  error: "",
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

  if (action.type === "DELETE_ITEM") {
    return {
      selectedMeals: state.selectedMeals.map((meal) => {
        const mealQuantity =
          meal.quantity > 0 ? meal.quantity - 1 : meal.quantity;
        return meal.name === action.payload.name
          ? { ...meal, quantity: mealQuantity }
          : meal;
      }),
    };
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

  function handleDeleteItem(mealName, price, quantity) {
    cartDispatch({
      type: "DELETE_ITEM",
      payload: {
        name: mealName,
        price,
        quantity,
      },
    });
  }

  const cartCntxt = {
    selectedMeals: cartState.selectedMeals,
    addItemToCart: handleAddItemToCart,
    deleteItemFromCart: handleDeleteItem,
  };

  return (
    <CartContext.Provider value={cartCntxt}>{children}</CartContext.Provider>
  );
}
