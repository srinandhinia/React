import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
// import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-httpActions";

let IsinitialExecution = true;
function App() {
  const cartVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();
  // Action creators approach
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (IsinitialExecution) {
      IsinitialExecution = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  // To keep components linear, we can use action creators instead of below approach using components.
  // useEffect(() => {
  //   const sendDataBackend = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         title: "Sending...",
  //         status: "pending",
  //         message: "Sending cart data to backend is pending",
  //       })
  //     );

  //     const response = await fetch(
  //       "https://book-app-backend-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Sending cart data to backend failed");
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         title: "Success!",
  //         status: "success",
  //         message: "Sent cart data to backend successfully",
  //       })
  //     );
  //   };

  //   if (IsinitialExecution) {
  //     IsinitialExecution = false;
  //     return;
  //   }

  //   sendDataBackend().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         title: "Error!",
  //         status: "error",
  //         message: "Sending cart data to backend is failed",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
