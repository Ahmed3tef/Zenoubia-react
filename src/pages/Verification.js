import React, { useState } from 'react';
import { MiniText, PageTitle, Selector } from '../components';
import './_verification.scss';
const Verification = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const submitHandler = e => {
    // what is required ??
    let data;
    const address = [];
    if (address1) address.append(address1);
    if (address2) address.append(address2);
  };
  return (
    <div className='verification'>
      <div className='verification__title'>
        <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      </div>
      <div className='verification__container'>
        <div className='verification__form'>
          <h2 className='verification__form-title'>
            Expédition et facturation
          </h2>
          <div className='verification__form-input'>
            <div className='d-flex'>
              <MiniText
                label={'Prénom'}
                width='70%'
                name={firstName}
                setName={setFirstName}
              />
              <MiniText
                label={'Nom de famille'}
                width='70%'
                classes='ms-5'
                name={lastName}
                setName={setLastName}
              />
            </div>
            <div className='d-flex'>
              <MiniText
                label={'Phone'}
                name={phone}
                setName={setPhone}
                width='70%'
              />
              <MiniText
                label={'E-mail'}
                name={email}
                setName={setEmail}
                width='70%'
                classes='ms-5'
              />
            </div>
            <div className='d-flex'>
              <Selector
                label={'Pays'}
                // name={phone}
                // setName={setPhone}
                width='70%'
              />
              <Selector
                label={'Gouvernorat'}
                // name={email}
                // setName={setEmail}
                width='70%'
                classes='ms-5'
              />
            </div>

            <Selector
              label={'Ville'}
              // name={email}
              // setName={setEmail}
              width='85.5%'
              // classes='ms-5'
            />
          </div>
        </div>
        <div className='verification__info'></div>
      </div>
    </div>
  );
};

export default Verification;
