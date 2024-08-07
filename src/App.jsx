import { useState } from "react";
import B from "./components/B";

const App = () => {

  const [name, setName] = useState('');

  // 1. Create a function named fn that takes an argument.
  const fn = (arg) => {
    // console.log(arg);
    setName(arg);
  }

  return (
    <div>
      <p>Data From Child: { name }</p>
      <B 
        // 2. Pass the function fn as a prop to the component B.
        fn={fn}
      />
    </div>
  )
}

export default App;