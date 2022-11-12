import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRelatedGroup, ProductWishlist } from '../components';
import { loadProducts } from '../store/reducers/wishlist';

const Wishlist = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.wishlist.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div className='wishlist'>
      <Container
        fluid
        style={{
          paddingInline: '10rem',
          paddingBlock: '5rem',
        }}>
        <Row>
          {products.map((p, i) => {
            return (
              <Col lg={6} key={i}>
                <ProductWishlist product={p} />
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
