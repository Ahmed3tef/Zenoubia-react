import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/zenoubia logo.png';
import { social } from './contact';
import './_footer.scss';

const Footer = props => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <div className='footer__main py-3 py-md-5 '>
        <div className='container footer__main-wrapper'>
          <div className='footer__links'>
            <div className='footer__links-title'>À propos de nous</div>
            <ul className='footer__links-wrapper'>
              <li className='footer__link' onClick={() => navigate(`/about`)}>
                Qui nous sommes?
              </li>
              <li className='footer__link'>OurInspiration</li>
              <li className='footer__link'>Nos buts</li>
            </ul>
          </div>
          <div className='footer__contact'>
            <div className='footer__logo mb-4'>
              <img src={logoImg} alt='' />
            </div>
            <div className='footer__social mb-4'>
              {social.map(({ icon, link }, i) => {
                return (
                  <a
                    key={i}
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
              className='mb-4'>
              zenoubia.combany@gmail.com
            </a>

            <a href='tel:+213560933380' target='_blank' rel='noreferrer'>
              +213 560 93 33 80
            </a>
          </div>
          <div className='footer__links'>
            <div className='footer__links-title'>Aider</div>
            <ul className='footer__links-wrapper'>
              <li className='footer__link' onClick={() => navigate(`/terms`)}>
                Termes et conditions
              </li>
              <li className='footer__link' onClick={() => navigate(`/policy`)}>
                Politique de confidentialité
              </li>
              <li className='footer__link' onClick={() => navigate(`/billing`)}>
                Expédition et facturation
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <span>All Rights Reserved - Icon © 2022</span>
      </div>
    </div>
  );
};

export default Footer;
