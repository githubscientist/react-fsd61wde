import { useEffect, useState } from "react";

const B = ({ fn }) => {

    const [name, setName] = useState('Krish');

    // 3. Call the function fn with an argument.
    useEffect(() => {
        fn(name);
    }, [name]);

    const handleChange = (e) => {
        setName(e.target.value);
    }

  return (
    <div>
        <input 
              value={name}
              onChange={handleChange}
        />    
    </div>
  )
}

export default B;