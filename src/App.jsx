import { createContext, useState } from "react";
import C1 from "./components/C1";
import C2 from "./components/C2";

// 1. Create a Context
export const CoinsContext = createContext();

const App = () => {

    const [coins, setCoins] = useState([25, 30, 45, 60, 75]);

  return (
      <div>
          <CoinsContext.Provider value={{ coins, setCoins }}>
            <C1 />
            <C2 />
          </CoinsContext.Provider>
    </div>
  )
}

export default App;