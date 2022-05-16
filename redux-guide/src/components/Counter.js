import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterSliceActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggle());
  };

  const increamentHandler = () => {
    dispatch(counterSliceActions.increament());
  };

  const decreamentHandler = () => {
    dispatch(counterSliceActions.decreament());
  };

  const increaseHandler = () => {
    dispatch(counterSliceActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increament</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decreamentHandler}>decreament</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
