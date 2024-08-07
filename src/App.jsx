import B from "./components/B";

const App = () => {

  // 1. Create a function named fn that takes an argument.
  const fn = (arg) => {
    console.log(arg);
  }

  return (
    <div>
      <B 
        // 2. Pass the function fn as a prop to the component B.
        fn={fn}
      />
    </div>
  )
}

export default App;