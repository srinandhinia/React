import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const cartValue = useSelector((state) => state.cart.totalCartValue);
  const dispatch = useDispatch();
  function handleDisplayCart() {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={handleDisplayCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartValue}</span>
    </button>
  );
};

export default CartButton;
