import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px'
  }

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div>
      <div style={style}>
        <button onClick={reset}>reset</button>
      </div>
      <div style={style}>
        <button onClick={increase}>plus</button>
        <div>{ count }</div>
        <button onClick={decrease}>minus</button>
      </div>
    </div>
  )
}

export default App;