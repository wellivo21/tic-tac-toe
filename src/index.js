// styles
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/Board';

const Game = () => {
  return (
    <div className='game'>
      Game
      <Board />
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById('root'));
