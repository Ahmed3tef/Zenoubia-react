import React from 'react';
import logoImg from '../../assets/zenoubia logo.png';
import { social } from './contact';
import './_footer.scss';

const Footer = props => {
  return (
    <div className='footer'>
      <div className='footer__main py-3 py-md-5 mb-2 mb-md-5'>
        <div className='container footer__main-wrapper'>
          <div className='footer__links'>
            <div className='footer__links-title'>À propos de nous</div>
            <ul className='footer__links-wrapper'>
              <li className='footer__link'>Qui nous sommes?</li>
              <li className='footer__link'>OurInspiration</li>
              <li className='footer__link'>Nos buts</li>
            </ul>
          </div>
          <div className='footer__contact'>
            <div className='footer__logo mb-5'>
              <img src={logoImg} alt='' />
            </div>
            <div className='footer__social mb-5'>
              {social.map(({ icon, link }) => {
                return (
                  <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='footer__social-link'>
                    {icon}
                  </a>
                );
              })}
            </div>
            <a
              href='mailto:zenoubia.combany@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='mb-5'>
              zenoubia.combany@gmail.com
            </a>

            <a href='tel:+213560933380' target='_blank' rel='noreferrer'>
              +213 560 93 33 80
            </a>
          </div>
          <div className='footer__links'>
            <div className='footer__links-title'>Aider</div>
            <ul className='footer__links-wrapper'>
              <li className='footer__link'>Termes et conditions</li>
              <li className='footer__link'>Politique de confidentialité</li>
              <li className='footer__link'>Expédition et facturation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>All Rights Reserved - Icon © 2022</p>
      </div>
    </div>
  );
};

export default Footer;
