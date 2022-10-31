import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductImg from '../ProductImg/ProductImg';
import './_CatSection.scss';
import prod1 from '../../assets/prod-1.webp';
import prod2 from '../../assets/prod-2.webp';
import prod3 from '../../assets/prod-3.webp';
import prod4 from '../../assets/prod-4.webp';
import ProductImgWithTitle from '../ProductImg/ProductImgWithTitle';
import CatSectionHead from './CatSectionHead';
const CatSection = props => {
  return (
    <section className='section__category my-3 my-md-5 py-3 py-md-5 '>
      <Container style={{ color: 'var(--color-black)' }}>
        <CatSectionHead title="Jaba - Robes  d'hotesse" id={5} />
        <Row className='justify-content-center'>
          <Col md={6} className=' d-flex justify-content-center'>
            <ProductImg image={prod1} />
          </Col>
          <Col md={6} className=' d-flex align-items-center'>
            <div className='products-wrapper'>
              <ProductImgWithTitle image={prod2} text={'DA   1900'} />
              <ProductImgWithTitle image={prod3} text={'DA   1200'} />
            </div>
            <div className='products-wrapper'>
              <ProductImgWithTitle image={prod3} text={'DA   1500'} />
              <ProductImgWithTitle image={prod4} text={'DA   1400'} />
            </div>
            <div className='products-wrapper'>
              <ProductImgWithTitle image={prod3} text={'DA   1500'} />
              <ProductImgWithTitle image={prod4} text={'DA   1400'} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CatSection;
