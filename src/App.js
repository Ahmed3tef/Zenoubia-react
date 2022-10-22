import React, { Fragment, useState } from 'react';
import { Container } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import {
  Banner,
  CatSection,
  Footer,
  Navbar,
  ProductCardLg,
  ProductCardSm,
} from './components';
import { Terms, AboutUs, Billing, Policy, ContactUs } from './pages';

const App = () => {
  const [largeCards, setLargeCards] = useState(false);
  return (
    <>
      <Navbar />
      <main>
        {/* <Banner />
        <CatSection /> */}
        {/* <AboutUs /> */}
        {/* <Terms /> */}
        {/* <Billing /> */}
        {/* <Policy /> */}
        {/* <ContactUs /> */}
      </main>
      <Container>
        <div className='toggle-card' onClick={() => setLargeCards(!largeCards)}>
          t
        </div>
        {largeCards ? <ProductCardLg /> : <ProductCardSm />}
      </Container>
      <Footer />
    </>
  );
};

export default App;
