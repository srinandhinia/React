import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Sending...",
        status: "pending",
        message: "Sending cart data to backend is pending",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://book-app-backend-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalCartValue: cart.totalCartValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data to backend failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          title: "Success!",
          status: "success",
          message: "Sent cart data to backend successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error!",
          status: "error",
          message: "Sending cart data to backend is failed",
        })
      );
    }
  };
}

export function fetchCartData() {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Fetching...",
        status: "pending",
        message: "Fetching cart data from backend is pending",
      })
    );

    const sendFetchRequest = async () => {
      const response = await fetch(
        "https://book-app-backend-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data from backend failed");
      }

      const data = response.json();
      return data;
    };

    try {
      const cartData = await sendFetchRequest();

      dispatch(
        cartActions.replaceCart({
          totalCartValue: cartData.totalCartValue,
          items: cartData.items || [],
        })
      );

      dispatch(
        uiActions.showNotification({
          title: "Success!",
          status: "success",
          message: "Fetched cart data from backend successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error!",
          status: "error",
          message: "Fetching cart data from backend is failed",
        })
      );
    }
  };
}
