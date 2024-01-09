import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  function handleIncrease() {
    dispatch(counterActions.increase(5)); // {type:'unique_identifier, payload:5}
  }
  function handleToggleCounter() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button className="actions" onClick={handleIncrement}>
          Increment
        </button>
        <button className="actions" onClick={handleIncrease}>
          Increaseby5
        </button>
        <button className="actions" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
