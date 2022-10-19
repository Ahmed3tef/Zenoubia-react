import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import searchIcon from '../../assets/Search.svg';
import mainLogo from '../../assets/zenoubia logo.png';
import profile from '../../assets/Account.svg';
import cart from '../../assets/Shopping_Cart.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { BiSearch } from 'react-icons/bi';
import './_navbar.scss';
const Navbar = props => {
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='nav sticky-top'>
      <Container>
        <div className='nav__main'>
          <div className='search' onClick={e => setShowSearch(!showSearch)}>
            <img src={searchIcon} alt='search icon' className='nav__icon' />
          </div>
          <a className='logo' href='/'>
            <img src={mainLogo} alt='logo' />
          </a>
          <div className='nav__icons'>
            <img src={profile} alt='logo' className='nav__icon ' />
            <img src={cart} alt='logo' className='nav__icon' />
          </div>
        </div>
      </Container>
      <div className='nav__secondary'>
        <ul className='nav__links'>
          <li className='nav__link'>page d'accueil</li>
          <li className='nav__link'>Les produits</li>
          <li className='nav__link'>
            À propos de nous
            <img src={arrowDown} alt='dropdown icon' className='ms-3' />
          </li>
          <li className='nav__link'>Contact</li>
        </ul>
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
