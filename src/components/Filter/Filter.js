import React, { useEffect, useState } from 'react';
import './_filter.scss';
import filterIcon from '../../assets/filterIcon.svg';
import { PriceRange } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubCategories } from '../../store/reducers/subcategory';
import { useNavigate } from 'react-router-dom';
const Filter = () => {
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(4000);

  const navigate = useNavigate();
  const subCategories = useSelector(state => state.subCategories.subCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSubCategories());
  }, [dispatch]);

  // const subCategories = [
  //   "Jaba - Roobes d'hotesse",
  //   'Caftans',
  //   'Djellaba',
  //   'Robes Soiree',
  //   'Abaya',
  //   'Tenus traditionnelles',
  //   'Khalidijia',
  //   'Tenus de sport',
  //   'Lingerie',
  //   'Jabador',
  //   'Sabot',
  // ];
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

  const submitHandler = e => {};
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
          {subCategories.map((e, index) => {
            for (let i = index; i < 10; i++) {
              return (
                <li
                  className='filter__sub-link'
                  style={{ cursor: 'pointer' }}
                  key={e.id}
                  onClick={() => navigate(`/products/${e.id}`)}>
                  {e.englishName}
                </li>
              );
            }
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
      <div className='filter__sub'>
        <div className='filter__sub-title'>
          <div className='filter__sub-title--icon'>
            <img src={filterIcon} alt='' />
          </div>
          <h3 className='filter__sub-title--text'>Prix (DA)</h3>
        </div>
        <div className='filter__price'>
          <PriceRange
            value1={startPrice}
            value2={endPrice}
            setValue1={setStartPrice}
            setValue2={setEndPrice}
          />
          <div className='filter__price-inputs'>
            <input
              type='text'
              value={startPrice}
              onChange={e => setStartPrice(e.target.value)}
              className='filter__price-input'
            />
            -
            <input
              type='text'
              value={endPrice}
              onChange={e => setEndPrice(e.target.value)}
              className='filter__price-input'
            />
          </div>
          <div className='form-btns mt-5'>
            <div className='form-btn' onClick={submitHandler}>
              search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
