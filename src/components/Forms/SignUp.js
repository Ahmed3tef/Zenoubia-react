import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../store/reducers/auth';
import LargeText from '../Inputs/LargeText';
import MiniText from '../Inputs/MiniText';
import './_forms.scss';
const SignUpForm = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCreated = useSelector(state => state.user.userCreated);
  const createUserHandler = () => {
    dispatch(
      createUser({
        firstName,
        lastName,
        displayName,
        email,
        password,
        address: [`${address}`],
      })
    );
  };
  useEffect(() => {
    if (userCreated) navigate('/login');
  }, [userCreated, navigate]);

  return (
    <div className='form__container'>
      <h2 className='form__title'>S'inscrire</h2>
      <div className='form__input-container'>
        <div className='form__input-label'>Prénom</div>
        <MiniText name={firstName} setName={setFirstName} />
      </div>
      <div className='form__input-container'>
        <div className='form__input-label'>Nom de famille</div>
        <MiniText name={lastName} setName={setLastName} />
      </div>
      <div className='form__input-container'>
        <div className='form__input-label'>Afficher un nom</div>
        <MiniText name={displayName} setName={setDisplayName} />
      </div>
      <div className='form__input-container'>
        <div className='form__input-label'>Adresse e-mail</div>
        <MiniText name={email} setName={setEmail} />
      </div>
      <div className='form__input-container'>
        <div className='form__input-label'>Mot de passe</div>
        <MiniText name={password} setName={setPassword} type='password' />
      </div>
      <div className='form__input-container'>
        <div className='form__input-label'>Adresse</div>
        <LargeText width='100%' desc={address} setDesc={setAddress} />
        <p className='form-hint'>
          Vos données personnelles seront utilisées pour soutenir votre
          expérience sur ce site Web, pour gérer l'accès à votre compte et à
          d'autres fins décrites dans notre politique de confidentialité.
        </p>
      </div>
      <div className='form-btns mt-5'>
        <div className='form-btn' onClick={createUserHandler}>
          Connexion
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
