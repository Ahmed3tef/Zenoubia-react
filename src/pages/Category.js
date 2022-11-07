import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Filter, PageTitle, ProductCardLg, ProductCardSm } from '../components';
import gridIcon from '../assets/gridIcon.svg';
import layerIcon from '../assets/layerIcon.svg';
import './_category.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadBestOffers,
  loadLatest,
  loadLatestOffers,
  loadProducts,
  loadTopRating,
  loadTopSelling,
} from '../store/reducers/products';
const Category = props => {
  const [isSmall, setIsSmall] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (params.id) {
      dispatch(loadProducts(params.id));
    }

    if (props.path === 'latest') {
      dispatch(loadLatest());
    }
    if (props.path === 'latestoffers') {
      dispatch(loadLatestOffers());
    }
    if (props.path === 'topselling') {
      dispatch(loadTopSelling());
    }
    if (props.path === 'bestoffer') {
      dispatch(loadBestOffers());
    }
    if (props.path === 'toprating') {
      dispatch(loadTopRating());
    }
  }, [dispatch, params.id, props.path]);

  return (
    <>
      <PageTitle maniTitle='Les Produits' subTitle='Djellaba' />
      <Container fluid className='p-0'>
        <Row
          style={{
            marginInlineEnd: '6rem',
            marginBlock: '3rem',
          }}>
          <div className='category__content'></div>
          <Col sm={2} md={3} xl={2}>
            <Filter />
          </Col>
          <Col sm={10} md={9} xl={10} style={{ paddingInline: '4rem' }}>
            <div className='switch-btns'>
              <div className='switch-btn' onClick={() => setIsSmall(true)}>
                <img src={gridIcon} alt='' />
              </div>
              <div className='switch-btn' onClick={() => setIsSmall(false)}>
                <img src={layerIcon} alt='' />
              </div>
            </div>
            <Row>
              {products.map((p, i) => {
                return (
                  <>
                    {isSmall && (
                      <Col xs={12} sm={6} lg={4} xl={3} key={i}>
                        <ProductCardSm data={p} />
                      </Col>
                    )}
                    {!isSmall && (
                      <Col sm={12} key={i}>
                        <ProductCardLg data={p} />
                      </Col>
                    )}
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Category;
