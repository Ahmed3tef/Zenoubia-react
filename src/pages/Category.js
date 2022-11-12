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
import { loadFilterData } from '../store/reducers/filterData';

const Category = props => {
  const [isSmall, setIsSmall] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const [sizeFilter, setSizeFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [subCatId, setSubCatId] = useState('');
  const products = useSelector(state => state.products.products);
  const filterData = useSelector(state => state.filterData.filterData);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (params.id) {
      dispatch(loadProducts(params.id));
      setSubCatId(params.id);
      return;
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
    setSubCatId(
      products && products[0] && products[0].subCatId
        ? products[0].subCatId
        : ''
    );
  }, [dispatch, params.id, props.path]);
  useEffect(() => {
    if (subCatId) dispatch(loadFilterData(subCatId));
  }, [dispatch, subCatId]);

  // console.log(colorFilter, sizeFilter);

  return (
    <>
      <PageTitle maniTitle='Les Produits' subTitle='Djellaba' />
      <Container fluid className='p-0'>
        <Row
          className='cat'
          style={{
            marginInlineEnd: '6rem',
            marginBlock: '3rem',
          }}>
          <div className='category__content'></div>
          <Col sm={2} md={3} xl={2}>
            <Filter
              colors={filterData.colors}
              sizes={filterData.sizes}
              setColorFilter={setColorFilter}
              setSizeFilter={setSizeFilter}
              sizeFilter={sizeFilter}
              colorFilter={colorFilter}
              subCatId={subCatId}
            />
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
                  <React.Fragment key={i}>
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
                  </React.Fragment>
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
