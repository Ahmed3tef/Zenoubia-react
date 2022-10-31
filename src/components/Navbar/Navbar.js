import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import searchIcon from '../../assets/Search.svg';
import mainLogo from '../../assets/zenoubia logo.png';
import profile from '../../assets/Account.svg';
import cart from '../../assets/Shopping_Cart.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { BiSearch } from 'react-icons/bi';

import './_navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = props => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
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
          <li className='nav__link'>À propos de nous</li>
          <li className='nav__link'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        {showDropDown && (
          <div className='nav__dropdown'>
            {[
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
            ].map((e, i) => {
              return (
                <li
                  className='nav__dropdown-item'
                  key={i}
                  onClick={() => navigate('/products')}>
                  {e}
                </li>
              );
            })}
          </div>
        )}
      </div>
      {showSearch && (
        <div className='nav__search'>
          <input
            type='text'
            name='searchbar'
            id='searchbar'
            className='nav__search-input'
            placeholder='Rechercher un produit...'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
          <span className='nav__search-icon'>
            <BiSearch />
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
