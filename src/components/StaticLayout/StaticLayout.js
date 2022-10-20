import React from 'react';
import { Container } from 'react-bootstrap';
import bannerImg from '../../assets/static-img.jpg';
import './_staticLayout.scss';
const StaticLayout = props => {
  return (
    <div className='static p-5'>
      <h2 className='static__header'>{props.header}</h2>
      <div className='static__img'>
        <img src={bannerImg} alt='banner img' />
      </div>
      <Container>{props.children}</Container>
    </div>
  );
};

export default StaticLayout;
