import { useRef } from "react";

const App = () => {

  const inputRef = useRef(null);

  const handleFocus = () => {
    // move the focus to the input box
    inputRef.current.focus();
    // console.log(inputRef.current.value);
    inputRef.current.value = "Hello World";
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Write something..."
        ref={inputRef}
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default App;