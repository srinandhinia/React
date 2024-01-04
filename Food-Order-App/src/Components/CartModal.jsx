import { forwardRef, useRef } from "react";
import Cart from "./Cart";
import FormModal from "./FormModal";

const CartModal = forwardRef(function CartModal({}, ref) {
  const formModal = useRef();

  function handleShowForm() {
    formModal.current.open();
  }

  return (
    <>
      <dialog id="modal" className=" bg-orange-50" ref={ref}>
        <h2 className="font-semibold">Your Cart</h2>
        <Cart />
        <div className="flex  justify-end m-3  ">
          <form method="dialog">
            <button className="pr-4">Close</button>
            <button
              className="px-2 bg-amber-400 border-2 rounded font-semibold"
              onClick={handleShowForm}
            >
              Go to Checkout
            </button>
          </form>
        </div>
      </dialog>
      <FormModal ref={formModal} />
    </>
  );
});

export default CartModal;
