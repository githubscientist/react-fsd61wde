import { useState } from "react";
import Status from "./components/Status";

const App = () => {

  let [user, setUser] = useState('Krish');

  console.log(`from parent: ${user}`);

  return (
    <div>
      <h1>{user || 'Guest'} has logged in!</h1>
      <Status 
        user={user}
        setUser={setUser}
      />
    </div>
  )
}

export default App;