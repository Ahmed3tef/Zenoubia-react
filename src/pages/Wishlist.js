import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductWishlist } from '../components';

const Wishlist = () => {
  return (
    <div className='wishlist'>
      <Container fluid className='px-md-5'>
        <Row>
          {[...new Array(4)].map((e, i) => {
            return (
              <Col lg={6} key={i}>
                <ProductWishlist />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>{/* put related products here */}</Container>
    </div>
  );
};

export default Wishlist;
