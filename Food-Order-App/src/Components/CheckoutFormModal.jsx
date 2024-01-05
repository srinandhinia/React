import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import Form from "./CheckoutForm.jsx";
import { CartContext } from "../store/Food-App-Context.jsx";
import { UserProgressContext } from "../store/UserProgress.jsx";
import OrderStatus from "./OrderStatusModal.jsx";
import Modal from "../UI/Modal.jsx";
import { currencyFormatter } from "../util/formatter.jsx";
import useHttp from "../hooks/useHttp.jsx";
import Error from "./Error.jsx";

let requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
export default function FormModal({ amount }) {
  const order = useRef();
  const { selectedMeals, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  let totalAmount = selectedMeals.reduce((amountIntitialValue, meal) => {
    return amountIntitialValue + meal.quantity * meal.price;
  }, 0);

  async function handleSubmitOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: selectedMeals,
          customer: customerData,
        },
      })
    );
  }

  function handleCloseCheckout() {
    hideCheckout();
  }

  function handleFinish() {
    hideCheckout();
    clearCart();
    clearData();
  }

  let actions = (
    <>
      <button type="button" className="p-2" onClick={handleCloseCheckout}>
        Close
      </button>
      <button className="bg-amber-400 rounded px-2">Submit Order</button>
    </>
  );

  if (isSending) {
    actions = <span>Sending the data to backend...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <div className="m-4">
          <h2>Success!</h2>
          <p>Your order is placed</p>
          <p>
            <button onClick={handleFinish} className="font-semibold">
              Okay
            </button>
          </p>
        </div>
      </Modal>
    );
  }
  return (
    <>
      <Modal
        open={progress === "checkout"}
        onClose={handleCloseCheckout}
        className="flex flex-col pl-6  pb-4 pt-4 bg-yellow-100"
      >
        <h2 className="font-semibold pb-4">Checkout</h2>
        <p>Amount : {currencyFormatter.format(totalAmount)}</p>
        <form className="control" onSubmit={handleSubmitOrder}>
          <Form type="text" lableName="Full Name" id="name" />
          <Form type="email" lableName="Email-Address" id="email" />
          <Form type="text" lableName="Street" id="street" />
          <div className="flex">
            <Form type="number" lableName="PostalCode" id="postal-code" />
            <Form type="text" lableName="City" id="city"></Form>
          </div>
          {error && <Error title="Failed to send data" errorMsg={error} />}
          <div method="dialog" className="flex justify-end p-2 text-xs">
            {actions}
          </div>
        </form>
      </Modal>
    </>
  );
}
