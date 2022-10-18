import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './_CatSection.scss';
const CatSectionHead = ({ title }) => {
  return (
    <div className='section__category-head'>
      <h3 className='section__category-head--title'>{title}</h3>
      <div to='/' className=' section__category-head--btn '>
        Voir plus
      </div>
    </div>
  );
};

export default CatSectionHead;
