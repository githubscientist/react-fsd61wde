import Status from "./components/Status";

const App = () => {

  let user = 'Krish';

  return (
    <div>
      <Status 
        user={user}
      />
    </div>
  )
}

export default App;