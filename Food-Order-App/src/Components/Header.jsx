import logoImg from "../assets/logo.jpg";
import { UserProgressContext } from "../store/UserProgress";
import { CartContext } from "../store/Food-App-Context";
import { useContext } from "react";

export default function Header({ itemAlreadyExists }) {
  const { showCart } = useContext(UserProgressContext);
  const { selectedMeals } = useContext(CartContext);

  const cartValue = selectedMeals.reduce((cartInitialValue, meal) => {
    return cartInitialValue + meal.quantity;
  }, 0);

  function handleShowModal() {
    showCart();
  }
  return (
    <>
      <div className="flex p-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 border-2 border-amber-400 rounded-full"
            src={logoImg}
            alt="React Food Logo"
          ></img>
          <h2 className=" text-amber-400 tracking-widest font-semibold text-xl uppercase">
            ReactFood
          </h2>
        </div>
        <div className=" text-amber-400 text-xl">
          <button className="flex gap-1" onClick={handleShowModal}>
            <h2>
              Cart <span></span>
            </h2>
            <div>( {cartValue} )</div>
          </button>
        </div>
      </div>
    </>
  );
}
