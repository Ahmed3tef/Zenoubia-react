import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoriesBar, VideoCard } from '../components';

const Home = () => (
  <>
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <VideoCard />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Home;
