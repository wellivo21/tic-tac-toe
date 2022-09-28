// styles
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/Board';

const Game = () => {
  return (
    <div className='game'>
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById('root'));
