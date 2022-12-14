import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import searchIcon from '../../assets/Search.svg';
import mainLogo from '../../assets/zenoubia logo.png';
import profile from '../../assets/Account.svg';
import cart from '../../assets/Shopping_Cart.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { BiSearch } from 'react-icons/bi';

import './_navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubCategories } from '../../store/reducers/subcategory';
import axios from 'axios';
import { toast } from 'react-toastify';
import { APIBase } from '../../store/reducers/api';

const Navbar = props => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
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
  function useOutsideAlerter(ref, setter) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setter(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, setter]);
  }
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  useOutsideAlerter(dropdownRef, setShowDropDown);
  useOutsideAlerter(searchRef, setShowSearch);
  // document.addEventListener('mousedown', () => setShowDropDown(false));
  const handleSearchOnEnter = e => {
    if (e.keyCode === 13 && searchValue) {
      navigate(`product/search/${searchValue}`);
    }
  };

  return (
    <div className='nav sticky-top'>
      <div className='nav__main'>
        <div className='search' onClick={e => setShowSearch(!showSearch)}>
          <img src={searchIcon} alt='search icon' className='nav__icon' />
        </div>
        <Link className='logo' to='/'>
          <img src={mainLogo} alt='logo' />
        </Link>
        <div className='nav__icons'>
          <Link to='/account'>
            <img src={profile} alt='logo' className='nav__icon ' />
          </Link>
          <Link to='/cart'>
            <img src={cart} alt='logo' className='nav__icon' />
          </Link>
        </div>
      </div>

      <div className='nav__secondary'>
        <ul className='nav__links'>
          <li className='nav__link'>
            <Link to='/'>page d'accueil</Link>
          </li>
          <li
            className='nav__link'
            onClick={() => setShowDropDown(!showDropDown)}>
            Les produits
            <img src={arrowDown} alt='dropdown icon' className='ms-3' />
          </li>
          <li className='nav__link'>
            <Link to='/about'>?? propos de nous</Link>
          </li>
          <li className='nav__link'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        {showDropDown && (
          <div className='nav__dropdown-container'>
            <div
              className='overlay'
              // onClick={() => setShowDropDown(false)}
            ></div>
            <ul className='nav__dropdown' ref={dropdownRef}>
              {subCategories.map((e, index) => {
                for (let i = index; i < 10; i++) {
                  return (
                    <li
                      className='nav__dropdown-item'
                      key={e.id}
                      onClick={() => navigate(`products/${e.id}`)}>
                      {e.englishName}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        )}
      </div>
      {showSearch && (
        <div className='nav__search' ref={searchRef}>
          <input
            type='text'
            name='searchbar'
            id='searchbar'
            className='nav__search-input'
            placeholder='Rechercher un produit...'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={handleSearchOnEnter}
            tabIndex='0'
          />
          <span
            className='nav__search-icon'
            onClick={() => navigate(`product/search/${searchValue}`)}>
            <BiSearch />
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
