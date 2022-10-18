import React, { Fragment } from 'react';
// import { Container } from 'react-bootstrap';
import { Banner, CatSection, Footer, Navbar } from './components';

const App = () => (
  <>
    <Navbar />
    <main>
      <Banner />
      <CatSection />
      <div className='section'>some text</div>
    </main>
    <Footer />
  </>
);

export default App;
