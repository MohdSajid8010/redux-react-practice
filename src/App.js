import React from "react";

import { useSelector, useDispatch } from "react-redux"

import { increment, decrement, reset } from "./actions/CounterActionCreator"

const App = () => {

  const counter = useSelector(state => state.a);
  console.log(counter)
  const dispatch = useDispatch();

  return ( <div>
    <h1>Counter: {counter}</h1>
    {/* <button onClick={dispatch(increment(10))}>Increment</button>
    <button onClick={dispatch(decrement(10))}>Decrement</button>
    <button onClick={dispatch(reset())}>Reset</button> */}
  </div>)
}

export default App;