import React from 'react';
import { useNavigate } from 'react-router-dom';

import './_CatSection.scss';
const CatSectionHead = ({ title, id }) => {
  const navigate = useNavigate();

  return (
    <div className='section__category-head'>
      <h3 className='section__category-head--title'>{title}</h3>
      <div
        className=' section__category-head--btn '
        onClick={() => navigate(`/products/${id}`)}>
        Voir plus
      </div>
    </div>
  );
};

export default CatSectionHead;
