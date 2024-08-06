import { useState } from "react";

const Counter = ({ updateCount }) => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        // parent class method
        // to have access to the count
        updateCount(count);
    }

  return (
      <div>
          <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter