import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductRelatedGroup, ProductWishlist } from '../components';

const Wishlist = () => {
  return (
    <div className='wishlist'>
      <Container
        fluid
        style={{
          paddingInline: '10rem',
        }}>
        <Row>
          {[...new Array(8)].map((e, i) => {
            return (
              <Col lg={6} key={i}>
                <ProductWishlist id={i} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <ProductRelatedGroup />
    </div>
  );
};

export default Wishlist;
