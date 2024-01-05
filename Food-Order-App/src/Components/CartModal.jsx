import { forwardRef, useContext, useRef } from "react";
import Cart from "./Cart";
import Modal from "../UI/Modal";
import { CartContext } from "../store/Food-App-Context";
import { UserProgressContext } from "../store/UserProgress";

export default function CartModal({}) {
  const formModal = useRef();
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const { selectedMeals } = useContext(CartContext);

  function handleShowCheckout() {
    showCheckout();
  }

  function handleCloseCart() {
    hideCart();
  }

  return (
    <>
      <Modal
        id="modal"
        className=" bg-orange-50"
        open={progress === "cart"}
        onClose={progress === "cart" ? handleCloseCart : null}
      >
        <h2 className="font-semibold">Your Cart</h2>
        <Cart />
        <div className="text-end">
          <button className="pr-4" onClick={handleCloseCart}>
            Close
          </button>
          {selectedMeals.length > 0 && (
            <button
              className="px-2 bg-amber-400 border-2 rounded font-semibold"
              onClick={handleShowCheckout}
            >
              Go to Checkout
            </button>
          )}
        </div>
      </Modal>
    </>
  );
}
