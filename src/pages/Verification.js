import React, { useState } from 'react';
import { LargeText, MiniText, PageTitle, Selector } from '../components';
import './_verification.scss';
const Verification = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('cash');

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
              width='90%'
              // classes='ms-5'
            />
            <LargeText label={'Adresse'} width='90%' />
          </div>
          <h2 className='verification__form-title mt-5'>
            Informations Complémentaires
          </h2>
          <div className='verification__form-input'>
            <LargeText
              label={'Notes de commande (facultatif)'}
              height={'10rem'}
              width='90%'
            />
          </div>
        </div>
        <div className='verification__info'>
          <h2 className='verification__info-title'>Votre commande</h2>
          <div className='verification__info-container'>
            <div className='verification__info-products'>
              <h3 className='verification__info-products--title'>Products</h3>
              <div className='verification__info-products--wrapper'>
                <div className='product'>
                  <div className='product-desc'>
                    Robe pour votre occasion Henna - Majestic - Eid - Dinner
                    Disponible en 9 couleurs et bénéficie d'une remise de 44% *1
                  </div>
                  <div className='product-price'>DA 38400</div>
                </div>
                <div className='product'>
                  <div className='product-desc'>
                    Robe pour votre occasion Henna - Majestic - Eid - Dinner
                    Disponible en 9 couleurs et bénéficie d'une remise de 44% *1
                  </div>
                  <div className='product-price'>DA 38400</div>
                </div>
                <div className='product'>
                  <div className='product-desc'>
                    Robe pour votre occasion Henna - Majestic - Eid - Dinner
                    Disponible en 9 couleurs et bénéficie d'une remise de 44% *1
                  </div>
                  <div className='product-price'>DA 38400</div>
                </div>
              </div>
              <div className='total'>
                <h3 className='total-title'>Total</h3>
                <span className='total-price'>DA 42800</span>
              </div>
              <div className='payment'>
                <h3 className='payment-title'> Mode de paiement</h3>
                <div className='payment-options'>
                  <div className='payment-option'>
                    <label>
                      <input
                        type='radio'
                        value='cash'
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                      />
                      Paiement à la livraison
                    </label>
                  </div>
                  <div className='payment-option'>
                    <label>
                      <input
                        type='radio'
                        value='card'
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                      />
                      Payer avec Visa
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='form-btns '>
            <div className='form-btn' onClick={submitHandler}>
              Compléter la commande
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
