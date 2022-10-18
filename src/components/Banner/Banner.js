import React from 'react';
import './_banner.scss';
import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className='banner'>
      <img src={bannerImg} alt='banner' />
    </div>
  );
};

export default Banner;
