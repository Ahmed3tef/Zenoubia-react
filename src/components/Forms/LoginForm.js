import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/reducers/auth';
import MiniText from '../Inputs/MiniText';
import './_forms.scss';
const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const rememberMeRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCreated = useSelector(state => state.user.userCreated);
  const loginUserHandler = () => {
    const rememberMe = rememberMeRef.current.checked;

    dispatch(
      loginUser({
        email,
        password,
      })
    )
      .then(unwrapResult)
      .then(promiseResponse => {
        if (promiseResponse.status === 1) {
          if (rememberMe) {
            localStorage.setItem('token', promiseResponse.token.token);
          }
        }
      });
  };
  useEffect(() => {
    if (userCreated) navigate('/login');
  }, [userCreated, navigate]);

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
        {!props.title && (
          <div className='remember'>
            <label>
              <input type='checkbox' name='remember me' ref={rememberMeRef} />
              Souviens-toi de moi.
            </label>
            <div className='signup' onClick={() => navigate('/signup')}>
              Créer un compte ?
            </div>
          </div>
        )}
      </div>
      <div className='form-btns mt-5'>
        <div className='form-btn' onClick={loginUserHandler}>
          Connexion
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
