import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Banner, CatSection } from '../components';
import { loadHomeProducts } from '../store/reducers/homeProducts';
// import { Col, Container, Row } from 'react-bootstrap';
// import { CategoriesBar, VideoCard } from '../components';

const Home = () => {
  const dispatch = useDispatch();
  const sections = useSelector(state => state.homeSections.homeSections);
  useEffect(() => {
    dispatch(loadHomeProducts());
  }, [dispatch]);
  console.log(sections);
  return (
    <>
      <Banner />
      {sections.map(section => {
        return (
          <CatSection
            data={section}
            title={section.subCategoryName}
            id={section.subCategoryId}
            mainImg={section.mainImg}
            products={section.products}
          />
        );
      })}
    </>
  );
};

export default Home;
