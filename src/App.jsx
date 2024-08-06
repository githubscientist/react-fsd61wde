import { useState } from "react";
import History from "./components/History";

const App = () => {

  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState([]);

  function increment() {
    setCount(count + 1);
    setClicks([...clicks, 'I']);
  }

  function decrement() {
    setCount(count - 1);
    setClicks([...clicks, 'D']);
  }

  function reset() {
    setCount(0);
    setClicks([...clicks, 'R']);
  }

  console.log(clicks);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <History 
        clicks={clicks}
      />
    </div>
  )
}

export default App;