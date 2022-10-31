import React, { useState } from 'react';
import './_filter.scss';
import filterIcon from '../../assets/filterIcon.svg';
const Filter = () => {
  const [startPrice, setStartPrice] = useState(150);
  const [endPrice, setEndPrice] = useState(300);
  const subCategories = [
    "Jaba - Roobes d'hotesse",
    'Caftans',
    'Djellaba',
    'Robes Soiree',
    'Abaya',
    'Tenus traditionnelles',
    'Khalidijia',
    'Tenus de sport',
    'Lingerie',
    'Jabador',
    'Sabot',
  ];
  const sizes = ['M', 'L', 'XL', '2XL', '3XL', '4XL'];
  const colors = [
    'Beige',
    'Le noir',
    'Bleu',
    'Marron',
    'Fuchsia',
    'Dorado',
    'Vert',
    'Gris',
    'Orange',
    'Rose',
  ];

  return (
    <div className='filter'>
      <div className='filter__sub'>
        <div className='filter__sub-title'>
          <div className='filter__sub-title--icon'>
            <img src={filterIcon} alt='' />
          </div>
          <h3 className='filter__sub-title--text'>Categories</h3>
        </div>
        <ul className='filter__sub-content'>
          {subCategories.map((e, i) => {
            return (
              <li className='filter__sub-link' key={i}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='filter__sub'>
        <div className='filter__sub-title'>
          <div className='filter__sub-title--icon'>
            <img src={filterIcon} alt='' />
          </div>
          <h3 className='filter__sub-title--text'>Taille</h3>
        </div>
        <ul className='filter__sub-content'>
          {sizes.map((e, i) => {
            return (
              <li className='filter__sub-link' key={i}>
                <label>
                  <input type='checkbox' name={e} id='i' value={i} />

                  {e}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='filter__sub'>
        <div className='filter__sub-title'>
          <div className='filter__sub-title--icon'>
            <img src={filterIcon} alt='' />
          </div>
          <h3 className='filter__sub-title--text'>Couleur</h3>
        </div>
        <ul className='filter__sub-content'>
          {colors.map((e, i) => {
            return (
              <li className='filter__sub-link' key={i}>
                <label>
                  <input type='checkbox' name={e} id='i' value={i} />

                  {e}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
