// styles
import './Square.css';

import { useState } from 'react';

export default function Square(props) {
  return (
    <button className='square' onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
}
