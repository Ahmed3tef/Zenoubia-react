import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { MiniText, PageTitle, ProfileForm } from '../components';
import './_account.scss';
import likeIcon from '../assets/My_Wish_List.svg';
import ordersIcon from '../assets/my-orders.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APIBase } from '../store/reducers/api';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Account = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const token = useSelector(state => state.user.token);
  const submitHandler = e => {
    let data;
    const address = [];
    const id = toast.loading('please wait a second...');
    if (address1) address.push(address1);
    if (address2) address.push(address2);
    data = {
      firstName,
      lastName,
      displayName,
      address,
      password:
        newPassword === passwordConfirm && currentPassword !== newPassword
          ? newPassword
          : '',
      phone,
    };
    axios
      .patch(`${APIBase}user`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        toast.update(id, {
          render: `Your information have been updated`,
          type: 'success',
          isLoading: false,
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.update(id, {
          render: `${errMsg} ⛔`,
          type: 'error',
          isLoading: false,
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  useEffect(() => {
    if (!token) navigate('/login');
  }, [token, navigate]);

  return (
    <div className='account'>
      {token && (
        <>
          <div className='account__btns container'>
            <img
              src={likeIcon}
              alt='wishlist-icon'
              onClick={() => navigate('/wishlist')}
            />
            <img
              src={ordersIcon}
              alt='orders-icon'
              onClick={() => navigate('/orders')}
            />
          </div>
          <PageTitle maniTitle={"Page d'accueil"} subTitle={'Mon compte'} />
          <Container>
            <h2 className='account__title'>Détails du compte</h2>
            <div className='account__forms'>
              <ProfileForm title={'Données personnelles'}>
                <div className='d-flex'>
                  <MiniText
                    label={'Prénom'}
                    width='59%'
                    name={firstName}
                    setName={setFirstName}
                  />
                  <MiniText
                    label={'Nom de famille'}
                    width='60%'
                    classes='ms-5'
                    name={lastName}
                    setName={setLastName}
                  />
                </div>
                <MiniText
                  label={'Afficher un nom'}
                  hint={
                    'Ce sera ainsi que votre nom sera affiché dans la section compte et dans les avis'
                  }
                  name={displayName}
                  setName={setDisplayName}
                />
                <MiniText label={'E-mail'} name={email} setName={setEmail} />
                <MiniText label={'Phone'} name={phone} setName={setPhone} />
              </ProfileForm>
              <ProfileForm title={'Adresses'}>
                <MiniText
                  label={'Adresse 1'}
                  hint={"sélectionner l'adresse"}
                  name={address1}
                  setName={setAddress1}
                />
                <MiniText
                  label={'Address 2'}
                  name={address2}
                  setName={setAddress2}
                />
              </ProfileForm>
              <ProfileForm title={'Changer le mot de passe'}>
                <MiniText
                  label={'Mot de passe actuel'}
                  hint={
                    'Mot de passe actuel (laisser vide pour laisser inchangé)'
                  }
                  name={currentPassword}
                  setName={setCurrentPassword}
                />
                <MiniText
                  label={'Nouveau mot de passe'}
                  hint={
                    'Nouveau mot de passe (laisser vide pour laisser inchangé)'
                  }
                  name={newPassword}
                  setName={setNewPassword}
                />
                <MiniText
                  label={'Confirmez le mot de passe'}
                  name={passwordConfirm}
                  setName={setPasswordConfirm}
                />
              </ProfileForm>
            </div>
            <div className='form-btns mt-5'>
              <div className='form-btn' onClick={submitHandler}>
                Sauvegarder les modifications
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Account;
