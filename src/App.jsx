import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/counterReducer";


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const reset = () => {
    dispatch({ type: 'RESET' });
  }

  return (
    <div>
      <h1>Count: { state.count }</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>{state.clicks.join(', ')}</p>
    </div>
  )
}

export default App;