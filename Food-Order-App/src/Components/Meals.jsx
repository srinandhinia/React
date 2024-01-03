import { useContext } from "react";
import { CartContext } from "../store/Food-App-Context";
export default function Meals({ availableMeals, isLoading, onSelect }) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="flex flex-wrap w-[80%] mx-auto">
      {isLoading && <p>Meals are loading...</p>}
      {!isLoading && availableMeals.length === 0 ? (
        <p>No Meals available</p>
      ) : (
        ""
      )}
      {!isLoading && (
        <ul className="w-[100%] flex flex-wrap">
          {availableMeals.map((meal) => {
            return (
              <>
                <li
                  className="w-[32%] bg-[#1d1a16] flex flex-col items-center m-1 rounded-lg relative shadow-lg"
                  key={meal.id}
                >
                  <img
                    className=" rounded-t-lg"
                    src={`http://localhost:3000/${meal.image}`}
                    alt={meal.image}
                  />
                  <h3 className="p-1 font-semibold tracking-wide">
                    {meal.name}
                  </h3>
                  <p className="p-1 mb-2 text-amber-400 bg-[#26221e] px-6 text-xs font-semibold ">
                    ${meal.price}
                  </p>
                  <p className="text-xs text-center mb-12">
                    {meal.description}
                  </p>
                  <button
                    className="bg-amber-400 text-xs px-2 py-1  rounded absolute bottom-3"
                    onClick={() => {
                      addItemToCart(meal.name, meal.price);
                      onSelect();
                    }}
                  >
                    Add to Cart
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}
