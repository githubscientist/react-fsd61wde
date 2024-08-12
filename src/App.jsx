import { useReducer } from "react";

const initialState = {
  count: 0,
  clicks: []
};

function reducer(state, action) {
  // reducer function is called when dispatch is called
  // action will point to the object that is passed in dispatch
  // state argument will be the current state of the component
  // expected from reducer function is to return the new state
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
        clicks: [...state.clicks, 'INC']
      };
    
    case 'DECREMENT':
      return {
        count: state.count - 1,
        clicks: [...state.clicks, 'DEC']
      };
    
    case 'RESET':
      return {
        count: 0,
        clicks: [...state.clicks, 'RES']
      };
  }
}

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