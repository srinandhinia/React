import { useContext } from "react";
import { CartContext } from "../store/Food-App-Context";
export default function Cart() {
  const { selectedMeals, addItemToCart } = useContext(CartContext);
  return (
    <ul className="m-4">
      {selectedMeals.map((meal) => {
        return (
          <li className="p-1 text-xs">
            <div className="flex relative">
              <div className="pr-2 flex mr-20">
                {meal.name}
                <span> - {meal.quantity} x </span>
                <span> ${meal.price}</span>
              </div>
              <div className="flex flex-row justify-end absolute right-0 ">
                <button
                  type="button"
                  className=" text-white px-1 border-2 bg-black rounded-full mx-1"
                >
                  -
                </button>
                <span className="mx-1 ">{meal.quantity}</span>
                <button
                  type="button"
                  className=" text-white px-1 border-2 bg-black rounded-full mx-1 "
                  onClick={() => addItemToCart(meal.name, meal.price)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
