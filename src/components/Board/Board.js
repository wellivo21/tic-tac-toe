// styles
import './Board.css';

import Square from '../Square/Square';
import { useState } from 'react';

export default function Board() {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClickEvent = (index) => {
    const newSquares = [...squares];

    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squaredFilled = Boolean(newSquares[index]);
    if (winnerDeclared || squaredFilled) {
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);

    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <Square
        value={squares[index]}
        onClickEvent={() => {
          handleClickEvent(index);
        }}
      />
    );
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className='board'>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [5, 6, 7], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // "X" or "O"
    }
  }
  return null;
}
