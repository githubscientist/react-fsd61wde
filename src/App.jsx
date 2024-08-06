import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {

  const [count, setCount] = useState(0);

  const updateCount = (childCount) => {
    setCount(childCount);
  }

  return (
    <div>
      <h1>Counter: { count }</h1>
      <Counter 
        updateCount={updateCount}
      />
    </div>
  )
}

export default App;