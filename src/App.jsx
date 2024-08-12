import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  // reducer function is called when dispatch is called
  // action will point to the object that is passed in dispatch
  // state argument will be the current state of the component
  // expected from reducer function is to return the new state
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    
    case 'DECREMENT':
      return state - 1;
  
    case 'RESET':
      return initialState;
  }
}

const App = () => {

  const [count, dispatch] = useReducer(reducer, initialState);

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
      <h1>Count: { count }</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App;