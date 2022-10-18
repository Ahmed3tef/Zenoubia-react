import React from 'react';
import { Container } from 'react-bootstrap';
import searchIcon from '../../assets/Search.svg';
import mainLogo from '../../assets/zenoubia logo.png';
import profile from '../../assets/Account.svg';
import cart from '../../assets/Shopping_Cart.svg';
import arrowDown from '../../assets/arrow-down.svg';
import './_navbar.scss';
const Navbar = () => {
  return (
    <div className='nav'>
      <Container>
        <div className='nav__main'>
          <div className='search'>
            <img src={searchIcon} alt='search icon' className='nav__icon' />
          </div>
          <div className='logo'>
            <img src={mainLogo} alt='logo' className='img-fluid' />
          </div>
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
    </div>
  );
};

export default Navbar;
