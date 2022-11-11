import React, { useEffect, useState } from 'react';
import './_filter.scss';
import filterIcon from '../../assets/filterIcon.svg';
import { PriceRange } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubCategories } from '../../store/reducers/subcategory';
import { useNavigate } from 'react-router-dom';
import { loadFilteredProducts } from '../../store/reducers/products';
const Filter = ({
  colors,
  sizes,
  setColorFilter,
  setSizeFilter,
  colorFilter,
  sizeFilter,
  subCatId,
}) => {
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(4000);
  const [filterData, setFilterData] = useState({
    sizeFillter: [],
    colorFillter: [],
    lowPrice: '',
    highPrice: '',
  });
  const navigate = useNavigate();
  const subCategories = useSelector(state => state.subCategories.subCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSubCategories());
  }, [dispatch]);

  const addColorHandler = (e, id) => {
    let resultArray = [];
    if (e.target.checked) {
      resultArray = colorFilter.filter(CheckedId => CheckedId !== id);
      resultArray.push(id);
    } else {
      resultArray = colorFilter.filter(CheckedId => CheckedId !== id);
    }
    setColorFilter(resultArray);
  };
  const addSizeHandler = (e, id) => {
    let resultArray = [];
    if (e.target.checked) {
      resultArray = sizeFilter.filter(CheckedId => CheckedId !== id);
      resultArray.push(id);
    } else {
      resultArray = sizeFilter.filter(CheckedId => CheckedId !== id);
    }
    setSizeFilter(resultArray);
  };
  useEffect(() => {
    setFilterData({
      sizeFillter: sizeFilter ? sizeFilter : [],
      colorFillter: colorFilter ? colorFilter : [],
      lowPrice: startPrice ? startPrice : '',
      highPrice: endPrice ? endPrice : '',
    });
  }, [sizeFilter, colorFilter, startPrice, endPrice]);

  const submitHandler = e => {
    dispatch(loadFilteredProducts({ id: subCatId, data: filterData }));
  };
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
          {sizes &&
            sizes.map((e, i) => {
              return (
                <li className='filter__sub-link' key={i}>
                  <label>
                    <input
                      type='checkbox'
                      name={e.name}
                      id={e.id}
                      value={e.id}
                      onChange={event => addSizeHandler(event, e.id)}
                    />

                    {e.name}
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
          {colors &&
            colors.map((e, i) => {
              return (
                <li className='filter__sub-link' key={i}>
                  <label>
                    <input
                      type='checkbox'
                      name={e.name}
                      id={e.id}
                      value={e.id}
                      onChange={event => addColorHandler(event, e.id)}
                    />

                    {e.name}
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
