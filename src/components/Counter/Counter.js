import React from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import './_counter.scss';
const Counter = props => {
  const increaseHandler = prevState => {
    if (prevState === 10) return prevState;
    props.addHandler(props.itemIndex);
    return prevState + 1;
  };
  const decreaseHandler = prevState => {
    if (prevState === 1) return prevState;
    return prevState - 1;
  };
  return (
    <div className='actions'>
      <span
        className='decrease'
        onClick={() => props.setCount(prevState => decreaseHandler(prevState))}>
        <TiMinus />
      </span>
      <span className='number'>{props.count}</span>
      <span
        className='add'
        onClick={() => props.setCount(prevState => increaseHandler(prevState))}>
        <TiPlus />
      </span>
    </div>
  );
};

export default Counter;
