import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Filter, PageTitle, ProductCardLg, ProductCardSm } from '../components';
import gridIcon from '../assets/gridIcon.svg';
import layerIcon from '../assets/layerIcon.svg';
import './_category.scss';
import { useParams } from 'react-router-dom';
const Category = props => {
  const [isSmall, setIsSmall] = useState(true);
  const params = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params]);

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
              {[...new Array(15)].map((e, i) => {
                return (
                  <>
                    {isSmall && (
                      <Col xs={12} sm={6} lg={4} xl={3}>
                        <ProductCardSm id={i} data={e} />
                      </Col>
                    )}
                    {!isSmall && (
                      <Col sm={12}>
                        <ProductCardLg id={i} data={e} />
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
