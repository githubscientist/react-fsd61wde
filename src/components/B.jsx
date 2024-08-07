import { useState } from "react";

const B = ({ fn }) => {

    const [name, setName] = useState('Krish');

    // 3. Call the function fn with an argument.
    fn(name);

  return (
    <div>B</div>
  )
}

export default B;