export default function Meals({ availableMeals, isLoading }) {
  console.log(availableMeals);
  return (
    <div className=" border-4 w-[60%] mx-auto border-slate-950">
      {isLoading && <p>Meals are loading...</p>}
      {!isLoading && availableMeals.length === 0 ? (
        <p>No Meals available</p>
      ) : (
        ""
      )}
      {!isLoading && (
        <ul>
          {availableMeals.map((meal) => {
            return <li key={meal.id}></li>;
          })}
        </ul>
      )}
    </div>
  );
}
