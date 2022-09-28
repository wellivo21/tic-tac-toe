// styles
import './Board.css';

import Square from '../Square/Square';

export default function Board() {
  return (
    <div className='board'>
      Board
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
