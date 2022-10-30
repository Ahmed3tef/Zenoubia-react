import React, { useEffect, useState } from 'react';

import './selector.css';
import './_UploadForm.scss';
const Selector = props => {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   props.setId('');
  // }, []);
  const data = [1, 2, 3, 4, 5];
  let direction;
  const width = props.width ? props.width : '80%';
  if (props.path === 'product') {
    // دا عشان ميحودش يمين غير ف البردوكت بس
    direction = props.direction;
  }
  // const changeIdHandler = e => {
  //   props.setId(e.target.value);
  //   setIsLoading(false);
  // };
  return (
    <div
      className={`${props.classes} input-container custom-select`}
      style={{ direction: !props.turnText ? '' : direction }}>
      <div className='input-label '>
        <p>{props.label}</p>
      </div>
      <select
        style={{
          direction: props.direction ? props.direction : 'ltr',
          width: !props.label ? '100%' : width,
        }}
        // onChange={changeIdHandler}
        // value={isLoading ? '' : props.id}
        placeholder=''>
        <option
          value=''
          disabled
          defaultValue
          key={Math.round(Math.random() * 10000)}>
          Select from these options
        </option>
        {data.map((el, i) => {
          // console.log(el);
          return (
            <option value={i} key={i}>
              {`${el}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;
