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
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, logout } from '../store/reducers/auth';
import { TbLogout } from 'react-icons/tb';

const Account = () => {
  const token = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.userData);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');
  const [displayName, setDisplayName] = useState(user ? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState(user ? user.phone : '');
  const [address1, setAddress1] = useState(
    user && user.address ? user.address[0] : ''
  );
  const [address2, setAddress2] = useState(
    user && user.address ? user.address[1] : ''
  );
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

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
      phone,
      email,
      address,
      password:
        newPassword === passwordConfirm && currentPassword !== newPassword
          ? newPassword
          : '',
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
  useEffect(() => {
    if (token) dispatch(getUserData(token));
  }, [token, dispatch]);
  useEffect(() => {
    if (user) {
      setFirstName(user ? user.firstName : '');
      setLastName(user ? user.lastName : '');
      setDisplayName(user ? user.displayName : '');
      setEmail(user ? user.email : '');
      setPhone(user ? user.phone : '');
      setAddress1(user && user.address ? user.address[0] : '');
      setAddress2(
        user && user.address && user.address[1] ? user.address[1] : ''
      );
    }
  }, [user]);

  console.log(user);
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
            <span className='logout' onClick={logoutHandler}>
              <TbLogout />
            </span>
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
