import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRelated } from '../../store/reducers/relatedProducts';
import ProductRelated from '../Cards/ProductRelated';

const ProductRelatedGroup = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRelated(id));
  }, [dispatch, id]);

  const relatedProducts = useSelector(
    state => state.relatedProducts.relatedProducts
  );
  console.log(relatedProducts);
  return (
    <>
      {relatedProducts.length > 0 && (
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
            {relatedProducts.length > 0 &&
              relatedProducts.map((product, i) => {
                return (
                  <Col sm={4} md={2} key={i}>
                    <ProductRelated product={product} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductRelatedGroup;
