import React, { useState } from 'react';
import { LargeText, MiniText, PageTitle } from '../components';
import './_contact.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsClockFill } from 'react-icons/bs';
const ContactUs = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <div className='contact'>
      <PageTitle maniTitle="Page d'accueil" subTitle='Nous contacter' />
      <div className='contact__container '>
        <div className='contact__msg'>
          <h2 className='contact__msg-title'>Nous contacter</h2>
          <div className='contact__msg-input'>
            <MiniText
              // placeholder='Add Product Benfit ...'
              label='Votre Nom'
              setName={setName}
              name={name}
            />
            <MiniText
              // placeholder='Add Product Benfit ...'
              label='Votre e-mail'
              setName={setEmail}
              name={email}
            />
            <MiniText
              // placeholder='Add Product Benfit ...'
              label='Matière'
              setName={setSubject}
              name={subject}
            />
            <LargeText label='Votre message' desc={msg} setDesc={setMsg} />
            <div className='form-btns mt-5'>
              <div className='form-btn'>Envoyer le message</div>
            </div>
          </div>
        </div>
        <div className='contact__info'>
          <h2 className='contact__info-title'>Entrer en contact</h2>
          <div className='contact__info-head'>
            <p>Contactez-nous, nous aimerions avoir de vos nouvelles.</p>
            <p>
              Vous trouverez ci-dessous des moyens de vous aider à nous joindre
              facilement !
            </p>
          </div>
          <div className='contact__info-main'>
            <div className='contact__info-main--icon'>
              <FaPhoneAlt />
            </div>
            <div className='contact__info-main--title'>Téléphoner:</div>
            +213560933380
          </div>
          <div className='contact__info-main'>
            <div className='contact__info-main--icon'>
              <IoMdMail />
            </div>
            <div className='contact__info-main--title'>Email:</div>
            zenoubia.company@gmail.com
          </div>
          <h2 className='contact__info-title my-5'>Entrer en contact</h2>
          <div className='contact__info-main'>
            <div className='contact__info-main--icon'>
              <BsClockFill />
            </div>
            <div className='contact__info-main--title'>Samedi - Jeudi</div>
            9h à 19h
          </div>
          <div className='contact__info-main'>
            <div className='contact__info-main--icon'>
              <BsClockFill />
            </div>
            <div className='contact__info-main--title'>Vendredi</div>
            Fermé
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
