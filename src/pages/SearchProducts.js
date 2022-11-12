import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductCardLg, ProductCardSm } from '../components';
import gridIcon from '../assets/gridIcon.svg';
import layerIcon from '../assets/layerIcon.svg';
import './_searchProductst.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { APIBase } from '../store/reducers/api';
import { toast } from 'react-toastify';

const SearchProducts = props => {
  const [isSmall, setIsSmall] = useState(true);
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (params.text) {
      axios
        .get(`${APIBase}product/search?text=${params.text}`)
        .then(res => {
          console.log(res.data.data);
          if (res.data.data.length > 0) {
            const mappedProducts = res.data.data.map(p => {
              const {
                id,
                name,
                images,
                alt,
                prices,
                avgRating,
                count,
                inStock,
                subcat,
              } = p;
              const mainImg = images[0].imageUrl;
              return {
                id,
                name,
                mainImg,
                images,
                alt,
                prices,
                count,
                avgRating,
                inStock,
                subCatId: subcat.id,
                currentPrice: prices[0].currentPrice,
                discountPrice: prices[0].discountPrice
                  ? prices[0].discountPrice
                  : null,
                percent: prices[0].percent ? prices[0].percent : null,
              };
            });

            setProducts(mappedProducts);
          } else {
            setProducts(null);
          }
          return res.data.data;
        })
        .catch(err => {
          const errMsg = err.response.data.message;

          toast.error(`${errMsg} ⛔`, {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,

            theme: 'light',
          });
        });
    }
  }, [params.text]);

  return (
    <Container fluid className='p-0'>
      <Row
        className='search-products'
        style={{
          paddingInline: '6rem',
          paddingBlock: '3rem',
          minHeight: '65vh',
          width: '100%',
        }}>
        {!products && <h1>No products found!!</h1>}
        {products && (
          <div className='switch-btns'>
            <div className='switch-btn' onClick={() => setIsSmall(true)}>
              <img src={gridIcon} alt='' />
            </div>
            <div className='switch-btn' onClick={() => setIsSmall(false)}>
              <img src={layerIcon} alt='' />
            </div>
          </div>
        )}
        {products && (
          <Row>
            {products.map((p, i) => {
              return (
                <React.Fragment key={i}>
                  {isSmall && (
                    <Col
                      xs={12}
                      sm={6}
                      lg={4}
                      xl={3}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ProductCardSm data={p} />
                    </Col>
                  )}
                  {!isSmall && (
                    <Col sm={12}>
                      <ProductCardLg data={p} />
                    </Col>
                  )}
                </React.Fragment>
              );
            })}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default SearchProducts;
