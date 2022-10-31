import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PageTitle, ProductCardLg, ProductCardSm } from '../components';
import gridIcon from '../assets/gridIcon.svg';
import layerIcon from '../assets/layerIcon.svg';
import './_category.scss';
const Category = props => {
  const [isSmall, setIsSmall] = useState(true);
  return (
    <>
      <PageTitle maniTitle='Les Produits' subTitle='Djellaba' />
      <Container>
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
                  <Col sm={4} md={3}>
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
      </Container>
    </>
  );
};

export default Category;
