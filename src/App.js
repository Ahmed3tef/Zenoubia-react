import React, { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import {
  Banner,
  CatSection,
  Footer,
  LoginForm,
  Navbar,
  ProductCardLg,
  ProductCardSm,
  ProductRelated,
  Reviews,
} from './components';
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
} from './pages';

const App = () => {
  const [largeCards, setLargeCards] = useState(false);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='/products' element={<Category />} />
          <Route path='/product/:prodId' element={<Product />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/checkout' element={<Verification />} />
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
