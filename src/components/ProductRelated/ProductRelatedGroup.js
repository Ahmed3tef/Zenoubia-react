import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductRelated from '../Cards/ProductRelated';

const ProductRelatedGroup = props => {
  return (
    <>
      <Container>
        <h3
          className='related__title'
          style={{
            fontFamily: 'var(--font-family-secondary)',
            marginBlock: '3rem',
            color: 'var(--color-main)',
            fontSize: '2.1rem',
          }}>
          Produits Connexes
        </h3>

        <Row>
          {[...new Array(12)].map((e, i) => {
            return (
              <Col sm={4} md={2}>
                <ProductRelated id={i} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ProductRelatedGroup;
