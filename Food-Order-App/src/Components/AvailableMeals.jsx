import { useEffect, useState } from "react";
import { fetchMeals } from "./http";
import Meals from "./Meals";

export default function AvailableMeals({ onSelect, selectedMeals }) {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function meals() {
      try {
        setIsLoading(true);
        const meals = await fetchMeals();
        setAvailableMeals(meals);

        setIsLoading(false);
      } catch (error) {
        setError(error.msg || "Could not fetch available meals");
      }
    }

    meals();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <Meals
          availableMeals={availableMeals}
          isLoading={isLoading}
          onSelect={onSelect}
        />
      )}
    </>
  );
}
