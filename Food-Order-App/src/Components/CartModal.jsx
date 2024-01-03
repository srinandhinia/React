import { forwardRef } from "react";
import Cart from "./Cart";

const CartModal = forwardRef(function CartModal({}, ref) {
  return (
    <dialog className=" bg-white " ref={ref}>
      <h2>Your Cart</h2>
      <Cart />
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default CartModal;
