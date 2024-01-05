import { currencyFormatter } from "../util/formatter";
import { useContext } from "react";
import { CartContext } from "../store/Food-App-Context";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};
export default function Meals() {
  const { addItemToCart } = useContext(CartContext);

  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  // useHttp("http://localhost:3000/meals", {})...{} is javascript object then it gets created everytime component executes.so declare it outside component and use it

  if (isLoading) {
    return <p className=" text-center font-semibold">Meals are Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" errorMsg={error} />;
  }

  return (
    <div className="flex flex-wrap w-[80%] mx-auto">
      <ul className="w-[100%] flex flex-wrap">
        {availableMeals.map((meal) => {
          return (
            <li
              key={meal.id}
              className="w-[32%] bg-[#1d1a16] flex flex-col items-center m-1 rounded-lg relative shadow-lg"
            >
              <img
                className=" rounded-t-lg"
                src={`http://localhost:3000/${meal.image}`}
                alt={meal.image}
              />
              <h3 className="p-1 font-semibold tracking-wide">{meal.name}</h3>
              <p className="p-1 mb-2 text-amber-400 bg-[#26221e] px-6 text-xs font-semibold ">
                {currencyFormatter.format(meal.price)}
              </p>
              <p className="text-xs text-center mb-12">{meal.description}</p>
              <button
                className="bg-amber-400 text-xs px-2 py-1  rounded absolute bottom-3"
                onClick={() => {
                  addItemToCart(meal.name, meal.price);
                }}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
