import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default function UserProgressContextProvider({ children }) {
  const [progressState, setProgressState] = useState("");

  function showCart() {
    setProgressState("cart");
  }

  function hideCart() {
    setProgressState("");
  }

  function showCheckout() {
    setProgressState("checkout");
  }

  function hideCheckout() {
    setProgressState("");
  }

  const userCtx = {
    progress: progressState,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
