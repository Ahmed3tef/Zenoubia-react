// import axios from 'axios';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { APIBase } from '../store/reducers/api';
import p1 from '../../assets/p-1.jpg';
import './_reviews.scss';
import { Ratings } from '..';
import { loadReviews } from '../../store/reducers/reviews';
import axios from 'axios';
import { APIBase } from '../../store/reducers/api';
const Reviews = props => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviews);

  useEffect(() => {
    dispatch(loadReviews(props.id));
  }, [dispatch, props.id]);

  // console.log(reviews);
  return (
    <Container className='p-5 '>
      {reviews.length === 0 && (
        <h1 className='reviews-notfound'> No Reviews Yet!!</h1>
      )}
      {reviews && (
        <div className='reviews'>
          <div className='reviews-title container-title'>
            {/* {reviews && reviews[0] && reviews[0].productName} */}
            Avis sur les produits
          </div>
          {reviews.map((r, i) => {
            return (
              <div className='review' key={i}>
                <div className='review-img'>
                  {/* <img src={r.userImg} alt='' /> */}
                  <img src={p1} alt='userImage' />
                </div>
                <div className='review-content'>
                  <div className='review-info'>
                    <div className='review-user mb-2'>
                      <span className='container-title me-4'>{`${r.userName}`}</span>
                      -
                      <span className='comment-date ms-4'>{`${new Date(
                        r.date
                      ).toLocaleString('en-CA', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        weekday: 'short',
                        hour: '2-digit',
                        hour12: true,
                        minute: '2-digit',
                        // second: '2-digit',
                      })}`}</span>
                    </div>
                    <Ratings value={r.starRate} color='#fdd7f3' />
                  </div>
                  <div className='review-comment'>{`${r.comment}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default Reviews;
