import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRelatedGroup, Ratings, Reviews } from '../components';
// import { loadProduct } from '../store/reducers/product';
import { Images } from '../components/imagesData';
import { Container, Row } from 'react-bootstrap';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { BsHeart, BsHeartFill, BsCartPlusFill } from 'react-icons/bs';
import './_product.scss';
import { useParams } from 'react-router-dom';
import { loadProduct } from '../store/reducers/product';
import { APIBase } from '../store/reducers/api';

const Product = props => {
  const { prodId } = useParams();

  const dispatch = useDispatch();
  // useState(() => {
  // dispatch(loadProduct());
  // }, []);
  // console.log(test);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [prodId]);

  useEffect(() => {
    dispatch(loadProduct(prodId));
  }, [dispatch, prodId]);

  const [count, setCount] = useState(1);
  // دي داتا البرودكت اللي هتطلع منها الصور
  const product = useSelector(state => state.product.product);
  // بعدين هتعمل ستيت للاندكس بتاع الصورة عشان تغيره كل ما تضغط علي الصورة تحت
  const [imgValue, setImgValue] = useState(0);
  // بعد كدا هتطلع الصورة اللي ليها الاندكس اللي هتاخده من الفاليو اللي فوق دي و هتديه لصور المنتج و هتجيب منها كدا الصورة الرئيسية اللي هتتعرض
  let mainImg;

  // const mainImage = Images[imgValue];
  const sizes = ['M', 'L', 'XL', '2XL', '3XL', '4XL'];
  const [isLiked, setIsLiked] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const increaseHandler = prevState => {
    if (prevState === 10) return prevState;

    return prevState + 1;
  };
  const decreaseHandler = prevState => {
    if (prevState === 1) return prevState;
    return prevState - 1;
  };
  const handleMainImage = index => {
    // setImgValue(index);
    // set image preview
    mainImg = product.images[imgValue]?.imageUrl;
  };
  return (
    <>
      <Container fluid>
        <div className=' product__container  '>
          <Row>
            <div className='col-3 h-100'>
              <div className='product__img-main '>
                <img src={`${APIBase}${product.mainImage}`} alt='product-img' />
              </div>
            </div>
            <div className='col-9 h-100'>
              <div className='product__info'>
                <h2 className='product__title'>{product.englishTitle}</h2>
                <div className='product__info-main'>
                  <div className='product__info-main--prices'>
                    <div className='rating'>
                      <Ratings value={product.avgRating} />
                      <span className='reviews-number'>{`(${product.reviews} reseñas)`}</span>
                    </div>
                    <div className='price-count-container'>
                      <span className='price'>{product.price}</span>
                      <div className='actions'>
                        <span
                          className='decrease'
                          onClick={() =>
                            setCount(prevState => decreaseHandler(prevState))
                          }>
                          <TiMinus />
                        </span>
                        <span className='number'>{count}</span>
                        <span
                          className='add'
                          onClick={() =>
                            setCount(prevState => increaseHandler(prevState))
                          }>
                          <TiPlus />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='product__info-main--sizes'>
                    <h3 className='sizes-title'>Tailles Disponibles</h3>

                    <ul className='sizes'>
                      {sizes.map((size, i) => (
                        <li
                          className={
                            activeId === i ? 'size active-size' : 'size'
                          }
                          onClick={() => setActiveId(i)}
                          key={i}>
                          {size}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='product__desc'>
                  <h3 className='product__desc-title'>
                    Description Du Produit
                  </h3>
                  <div className='product__desc-main'>
                    {product.englishDescription}
                  </div>
                </div>
                <div className='product__preview'>
                  <ul className='product__preview-menu'>
                    {product.images?.map((image, index) => (
                      <li
                        key={index}
                        onClick={() => handleMainImage(index)}
                        className='product__preview-item'>
                        <img
                          src={`${APIBase}${image.imageUrl}`}
                          alt='product-img'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <div className='product__actions'>
          <div
            className='product__actions-like'
            onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <BsHeartFill /> : <BsHeart />}
            Ajouter à la liste de souhaits
          </div>
          <div className='product__actions-add'>
            <BsCartPlusFill />
            Ajouter au panier
          </div>
        </div>
      </Container>
      <Reviews />
      <ProductRelatedGroup />
    </>
  );
};

export default Product;
