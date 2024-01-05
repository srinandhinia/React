import { useContext } from "react";
import { CartContext } from "../store/Food-App-Context";
import { currencyFormatter } from "../util/formatter";
import FormModal from "./CheckoutFormModal";
export default function Cart() {
  const { selectedMeals, addItemToCart, deleteItemFromCart } =
    useContext(CartContext);

  let totalAmount = selectedMeals.reduce((amountIntitialValue, meal) => {
    return amountIntitialValue + meal.quantity * meal.price;
  }, 0);
  return (
    <>
      {!selectedMeals.length && <p>No items in Cart!!</p>}
      <ul className="m-4 ">
        {selectedMeals.map((meal) => {
          return (
            <li key={meal.name} className="p-1 text-xs">
              <div className="flex relative pr-24">
                <div className="pr-2 flex mr-20">
                  {meal.name}
                  <div> - {meal.quantity} x </div>
                  <div> {currencyFormatter.format(meal.price)}</div>
                </div>
                <div className="flex flex-row justify-end absolute right-0 ">
                  <button
                    type="button"
                    className=" text-white px-1 border-2 bg-black rounded-full mx-1"
                    onClick={() =>
                      deleteItemFromCart(meal.name, meal.price, meal.quantity)
                    }
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
        {totalAmount > 0 && (
          <div className=" text-end">{totalAmount.toFixed(2)}</div>
        )}
      </ul>
    </>
  );
}
