import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  // this runs when the component is mounted and never runs again
  useEffect(() => {
    console.log(`Component is mounted`);
  }, []);

  // this runs when the component is mounted and every time the count changes
  useEffect(() => {
    console.log(`Count is changed to ${count}`);
  }, [count]);

  // this runs when the component is mounted and every time the state changes
  useEffect(() => {
    console.log(`History is changed to ${history}`);
  });

  const handleIncrement = () => {
    setCount(count + 1);
    setHistory(
      [...history, count]
    );
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App;