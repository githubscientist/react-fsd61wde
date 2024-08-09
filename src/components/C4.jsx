import React, { useContext } from 'react'
import { CoinsContext } from '../App'

const C4 = () => {

    const coins = useContext(CoinsContext);

  return (
      <div>
          <h1>Total Coins: { coins.reduce((p, c) => p+ c) }</h1>
    </div>
  )
}

export default C4