import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LargeText, MiniText, PageTitle, Selector } from '../components';
import { APIBase } from '../store/reducers/api';
import { loadCities } from '../store/reducers/cities';
import { loadCountries } from '../store/reducers/countries';
import { loadGovernments } from '../store/reducers/governments';
import './_verification.scss';
const Verification = props => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = useSelector(state => state.countries.countries);
  const governments = useSelector(state => state.governments.governments);
  const cities = useSelector(state => state.cities.cities);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [countryId, setCountryId] = useState('');
  const [governomentId, setGovernomentId] = useState('');
  const [cityId, setCityId] = useState('');

  const [additionalInfo, setAdditionalInfo] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadGovernments(countryId));
  }, [dispatch, countryId]);
  useEffect(() => {
    dispatch(loadCities(governomentId));
  }, [dispatch, governomentId]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params]);

  const cartItems = JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : null;
  const submitHandler = e => {
    // what is required ??
    const products = cartItems.map(item => {
      return {
        productId: item.product.id,
        priceId: item.product.priceId,
        quantity: item.count,
      };
    });
    // console.log(products);

    const data = {
      firstName,
      lastName,
      phone,
      email,
      countryId,
      governomentId,
      cityId,
      address,
      products,
      additionalInformation: additionalInfo ? additionalInfo : '',
      couponId: '',
    };
    // console.log(data);

    const id = toast.loading('please wait a second...');

    axios
      .post(`${APIBase}order`, data)
      .then(res => {
        toast.update(id, {
          render: `Order done successfully ????`,
          type: 'success',
          isLoading: false,
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/');
      })
      .catch(err => {
        const errMsg = err.response.data.message;
        toast.update(id, {
          render: `${errMsg} ???`,
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
  return (
    <div className='verification'>
      <div className='verification__title'>
        <PageTitle maniTitle={'Mon compte'} subTitle={'Panier'} />
      </div>
      <div className='verification__container'>
        <div className='verification__form'>
          <h2 className='verification__form-title'>
            Exp??dition et facturation
          </h2>
          <div className='verification__form-input'>
            <div className='d-flex'>
              <MiniText
                label={'Pr??nom'}
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
                id={countryId}
                setId={setCountryId}
                data={countries}
                width='70%'
              />
              <Selector
                label={'Gouvernorat'}
                id={governomentId}
                setId={setGovernomentId}
                data={governments}
                width='70%'
                classes='ms-5'
              />
            </div>

            <Selector
              label={'Ville'}
              id={cityId}
              setId={setCityId}
              data={cities}
              width='90%'
              // classes='ms-5'
            />
            <LargeText
              label={'Adresse'}
              width='90%'
              desc={address}
              setDesc={setAddress}
            />
          </div>
          <h2 className='verification__form-title mt-5'>
            Informations Compl??mentaires
          </h2>
          <div className='verification__form-input'>
            <LargeText
              label={'Notes de commande (facultatif)'}
              height={'10rem'}
              width='90%'
              desc={additionalInfo}
              setDesc={setAdditionalInfo}
            />
          </div>
        </div>
        <div className='verification__info'>
          <h2 className='verification__info-title'>Votre commande</h2>
          <div className='verification__info-container'>
            <div className='verification__info-products'>
              <h3 className='verification__info-products--title'>Products</h3>
              <div className='verification__info-products--wrapper'>
                {cartItems.map((e, i) => {
                  return (
                    <div className='product' key={i}>
                      <div className='product-desc'>
                        <div className='product-desc-main'>
                          {e.product.englishDescription}
                        </div>
                        <div className='product-count'>
                          number of items: {e.count}
                        </div>
                      </div>
                      <div className='product-price'>DA 38400</div>
                    </div>
                  );
                })}
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
                      Paiement ?? la livraison
                    </label>
                  </div>
                  {/* <div className='payment-option'>
                    <label>
                      <input
                        type='radio'
                        value='card'
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                      />
                      Payer avec Visa
                    </label>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='form-btns '>
            <div className='form-btn' onClick={submitHandler}>
              Compl??ter la commande
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
