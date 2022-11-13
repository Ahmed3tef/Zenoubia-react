import React, { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import { Container } from 'react-bootstrap';
import { Footer, LoginForm, Navbar, SignUpForm } from './components';
import {
  Terms,
  AboutUs,
  Billing,
  Policy,
  ContactUs,
  Product,
  Wishlist,
  Account,
  Verification,
  Cart,
  Home,
  Category,
  Orders,
  SearchProducts,
} from './pages';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='account' element={<Account />} />
          <Route path='products'>
            <Route path=':id' element={<Category />} />
            <Route path='latest' element={<Category path='latest' />} />
            <Route
              path='latestoffers'
              element={<Category path='latestoffers' />}
            />
            <Route path='topselling' element={<Category path='topselling' />} />
            <Route path='bestoffer' element={<Category path='bestoffer' />} />
            <Route path='toprating' element={<Category path='toprating' />} />
          </Route>
          <Route path='product/search/:text' element={<SearchProducts />} />
          <Route path='product/:prodId' element={<Product />} />
          <Route path='contact' element={<ContactUs />} />
          <Route path='account' element={<Account />} />
          <Route path='cart' element={<Cart />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='terms' element={<Terms />} />
          <Route path='policy' element={<Policy />} />
          <Route path='billing' element={<Billing />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='checkout' element={<Verification />} />
          <Route path='orders' element={<Orders />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='signup' element={<SignUpForm />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
        {/* <Home /> */}

        {/* <AboutUs /> */}
        {/* <Terms /> */}
        {/* <Billing /> */}
        {/* <Policy /> */}
        {/* <ContactUs /> */}
        {/* <Product /> */}
        {/* <ProductRelated /> */}
        {/* <Wishlist /> */}
        {/* <Account /> */}
        {/* <LoginForm /> */}
        {/* <Verification /> */}
        {/* <Cart /> */}

        <ToastContainer
          position='top-right'
          autoClose={2500}
          limit={4}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </main>

      {/* <Container>
        <div className='toggle-card' onClick={() => setLargeCards(!largeCards)}>
          t
        </div>
        {largeCards ? <ProductCardLg /> : <ProductCardSm />}
      </Container> */}
      <Footer />
    </>
  );
};

export default App;
