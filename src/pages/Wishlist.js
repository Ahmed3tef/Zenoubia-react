import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ProductRelatedGroup, ProductWishlist } from '../components';
import { APIBase, token } from '../store/reducers/api';
import { loadProducts } from '../store/reducers/wishlist';
import './_wishlist.scss';
const Wishlist = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.wishlist.products);
  const [overlay, setOverlay] = useState(false);
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const deleteHandler = () => {
    axios
      .delete(`${APIBase}wishlist`, {
        headers: {
          Authorization: token,
        },
        params: {
          id: itemId,
        },
      })
      .then(res => {
        // console.log(res.data);
        // const successMsg = res.data.message;
        //product deleted from wishlist successfaully
        // get new data
        dispatch(loadProducts());
        //last
        setOverlay(false);
      })
      .catch(err => {
        const errMsg =
          err.response.data.message === 'token is invalid'
            ? 'token is invalid please login again'
            : err.response.data.message;
        toast.error(`${errMsg}`, {
          position: 'top-right',
          autoClose: 4500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  return (
    <div className='wishlist'>
      <Container
        fluid
        style={{
          paddingInline: '10rem',
          paddingBlock: '5rem',
          minHeight: '60vh',
        }}>
        <Row
          style={{
            minHeight: '60vh',
          }}>
          {products.length === 0 && (
            <h1
              style={{
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              No products added yet.
            </h1>
          )}
          {products.length > 0 &&
            products.map((p, i) => {
              return (
                <Col lg={6} key={i}>
                  <ProductWishlist
                    product={p}
                    setId={setItemId}
                    setOverlay={setOverlay}
                  />
                </Col>
              );
            })}
        </Row>
        {overlay && (
          <div className='delete-overlay'>
            <div className='delete-overlay-content'>
              <h3 className='overlay-header'>
                ??tes-vous s??r de vouloir supprimer d??finitivement ce produit de
                votre liste de souhaits ?
              </h3>
              <div className='overlay-btns'>
                <div className='overlay-btn' onClick={deleteHandler}>
                  Oui
                </div>
                <div className='overlay-btn' onClick={() => setOverlay(false)}>
                  Non
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
