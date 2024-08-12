import { useState } from 'react';
import './App.css';
import Square from './components/Square';

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {

    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[index] = 'X';
    } else {
      newSquares[index] = 'O';
    }

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    return null;
  }

  let status;
  let winner = calculateWinner(squares);

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div>{ status }</div>
      <div className='row'>
        <Square 
          handleClick={() => handleClick(0)}
          value={squares[0]}
        />
        <Square 
          handleClick={() => handleClick(1)}
          value={squares[1]}
        />
        <Square 
          handleClick={() => handleClick(2)}
          value={squares[2]}
        />
      </div>
      <div className='row'>
        <Square 
          handleClick={() => handleClick(3)}
          value={squares[3]}
        />
        <Square 
          handleClick={() => handleClick(4)}
          value={squares[4]}
        />
        <Square 
          handleClick={() => handleClick(5)}
          value={squares[5]}
        />
      </div>
      <div className='row'>
        <Square 
          handleClick={() => handleClick(6)}
          value={squares[6]}
        />
        <Square 
          handleClick={() => handleClick(7)}
          value={squares[7]}
        />
        <Square 
          handleClick={() => handleClick(8)}
          value={squares[8]}
        />
      </div>
    </div>
  )
}

export default App