import { forwardRef } from "react";

const OrderStatus = forwardRef(function OrderStatus({}, ref) {
  return (
    <dialog ref={ref}>
      <p>Successfully placed the order!!</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default OrderStatus;
