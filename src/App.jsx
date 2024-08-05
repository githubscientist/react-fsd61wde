import { useState } from "react";

const App = () => {

  const [name, setName] = useState('Krish');

  function handleClick() {
    setName('Kailash');
  }

  console.log(name);

  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>Update Name</button>
    </div>
  )
}

export default App;