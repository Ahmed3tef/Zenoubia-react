import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './_headSection.scss';
import bestSellerImg from '../../assets/best-seller.png';
import offersImg from '../../assets/offers.png';
import latestImg from '../../assets/ete-2022.png';
import recentArrivedImg from '../../assets/recent-arrived.png';
import latestOffersImg from '../../assets/latest-offers.png';
import { useNavigate } from 'react-router-dom';
const HeadSection = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className='p-0 second-section'>
      <Row className='m-0 p-0'>
        <Col xs={3} className='p-0 m-0 h-100'>
          <div
            className='best-seller head-section'
            style={{
              height: '100%',
            }}>
            <div
              onClick={() => navigate('products/topselling')}
              className='head-section-img'
              style={{
                width: '95%',
                height: '90%',

                // marginTop: '2rem',
              }}>
              <img src={bestSellerImg} alt='' />
            </div>
            <h2 className='head-section-title'>Best-seller</h2>
          </div>
        </Col>
        <Col xs={9} className='p-0 m- h-100'>
          {/* <Col sm={4} className='p-0 m-0'></Col>
          <Col sm={8} className='p-0 m-0'></Col> */}
          <div
            className='h-50 d-flex'
            style={{
              width: '100%',
            }}>
            <div
              className='head-section latest '
              onClick={() => navigate('products/toprating')}>
              <div className='head-section-img'>
                <img src={latestImg} alt='' />
              </div>
              <h2 className='head-section-title'>été 2022</h2>
            </div>
            <div
              className='recent-arrived head-section'
              onClick={() => navigate('products/latest')}>
              <div className='head-section-img'>
                <img src={recentArrivedImg} alt='' />
              </div>
              <h2 className='head-section-title'>Nouveau arrivé</h2>
            </div>
          </div>
          <div className='h-50 d-flex'>
            <div
              className='latest-offers head-section'
              onClick={() => navigate('products/latestoffers')}>
              <h2 className='head-section-title'>Dernières offres</h2>
              <div className='head-section-img'>
                <img src={latestOffersImg} alt='' />
              </div>
            </div>
            <div
              className='best-offers head-section'
              onClick={() => navigate('products/bestoffer')}>
              <div className='head-section-img'>
                <img src={offersImg} alt='' />
              </div>
              <h2 className='head-section-title'>Remises</h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeadSection;
