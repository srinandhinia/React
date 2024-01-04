import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import Form from "./Form";
import { updateOrderInBackend } from "./http.jsx";
import { CartContext } from "../store/Food-App-Context";
import OrderStatus from "./OrderStatus.jsx";
const FormModal = forwardRef(function FormModal({ amount }, ref) {
  const dialog = useRef();
  const order = useRef();
  const { selectedMeals, error } = useContext(CartContext);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  async function handleSubmitOrder(e) {
    e.preventDefault();
    console.log(selectedMeals);
    try {
      await updateOrderInBackend(selectedMeals);
    } catch (error) {
      error = error.msg || "Could not add order data to backend";
    }
    order.current.showModal(error);
    if (error) {
      console.log(error);

      return;
    }
  }

  return (
    <>
      <dialog
        ref={dialog}
        className="flex flex-col pl-6  pb-4 pt-4 bg-yellow-100"
      >
        <h2 className="font-semibold pb-4">Checkout</h2>
        <p>{amount}</p>
        <form>
          <Form type="text" lableName="Full Name" />
          <Form type="email" lableName="Email-Address" />
          <Form type="text" lableName="Street" />
          <div className="flex">
            <Form type="number" lableName="PostalCode" />
            <Form type="text" lableName="City"></Form>
          </div>

          <div method="dialog" className="flex justify-end p-2 text-xs">
            <button className="p-2">Close</button>
            <button
              type="button"
              className="bg-amber-400 rounded px-2"
              onClick={handleSubmitOrder}
            >
              Submit Order
            </button>
          </div>
        </form>
      </dialog>
      <OrderStatus ref={order} error={error} />
    </>
  );
});
export default FormModal;
