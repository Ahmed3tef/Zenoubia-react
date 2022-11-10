import React, { useEffect } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import './_counter.scss';
const Counter = props => {
  const increaseHandler = prevState => {
    if (prevState === 10) return prevState;

    return prevState + 1;
  };
  const decreaseHandler = prevState => {
    if (prevState === 1) return prevState;
    return prevState - 1;
  };
  useEffect(() => {
    props.setCount(props.count);
  }, [props, props.count]);

  return (
    <div className='actions'>
      <span
        className='decrease'
        onClick={() => {
          if (props.path === 'cart') {
            props.decreaseHandler(props.itemIndex);

            return;
          }
          props.setCount(prevState => decreaseHandler(prevState));
        }}>
        <TiMinus />
      </span>
      <span className='number'>{props.count}</span>
      <span
        className='add'
        onClick={() => {
          if (props.path === 'cart') return props.addHandler(props.itemIndex);
          props.setCount(prevState => increaseHandler(prevState));
        }}>
        <TiPlus />
      </span>
    </div>
  );
};

export default Counter;
