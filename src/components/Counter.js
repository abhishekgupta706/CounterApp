import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="border-spacing-x-5 bg-lime-500 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br />
      <br />
      <div>
        <h1>{count}</h1>
      </div>
      <br />
      <br />
      <button
        className="border-spacing-x-5 bg-red-500 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
