import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../../store/slices/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  const handleIncrement = () => dispatch(increment(10));
  const handleDecrement = () => dispatch(decrement(10));

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increase counter</button>
      <button onClick={handleDecrement}>Decrease counter</button>
    </div>
  );
}

export default Counter;