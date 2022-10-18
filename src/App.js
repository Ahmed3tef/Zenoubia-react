import React, { Fragment } from 'react';
// import { Container } from 'react-bootstrap';
import {
  Banner,
  CatSection,
  Footer,
  Navbar,
  ProductCardSm,
} from './components';

const App = () => (
  <>
    <Navbar />
    <main>
      <Banner />
      <CatSection />
    </main>
    <ProductCardSm />
    <Footer />
  </>
);

export default App;
