import React, { useState } from 'react';
import MiniText from '../Inputs/MiniText';
import './_forms.scss';
const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='form__container'>
      <h2 className='form__title'>{props.title ? props.title : 'Connexion'}</h2>
      <div className='form__input-container'>
        <div className='form__input-label'>
          Nom d'utilisateur ou adresse e-mail
        </div>
        <MiniText name={email} setName={setEmail} />
      </div>
      <div className='form__input-container'>
        <div className='form__input-label'>Mot de passe</div>
        <MiniText name={password} setName={setPassword} type='password' />
        {props.title && (
          <p className='form-hint'>
            Vos données personnelles seront utilisées pour soutenir votre
            expérience sur ce site Web, pour gérer l'accès à votre compte et à
            d'autres fins décrites dans notre politique de confidentialité.
          </p>
        )}
      </div>
      <div className='form-btns mt-5'>
        <div className='form-btn'>Connexion</div>
      </div>
    </div>
  );
};

export default LoginForm;
