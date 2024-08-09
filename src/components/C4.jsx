import React, { useContext } from 'react'
import { CoinsContext } from '../App'

const C4 = () => {

    const { coins, setCoins } = useContext(CoinsContext);

  return (
      <div>
        <h1>Total Coins: {coins.reduce((p, c) => p + c)}</h1>
        <button onClick={() => setCoins([...coins, 100])}>Add 100</button>
    </div>
  )
}

export default C4