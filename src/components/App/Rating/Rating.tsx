import React, { FC, useContext } from 'react';
import StarRatings from 'react-star-ratings';
import ReposContext from '../../../context';
import { types } from '../../../context/constants';

interface IRatingProps {
  id: number;
  rating: number;
}

const Rating: FC<IRatingProps> = ({ id, rating }) => {
  const { dispatch } = useContext(ReposContext);

  const changeRating = (newRating: number) => {
    console.log(newRating);
    dispatch({
      type: types.SET_RATING,
      payload: {
        id,
        rating: newRating,
      },
    });
  };

  return (
    <StarRatings
      rating={rating}
      name='rating'
      starSpacing='4px'
      starDimension='20px'
      changeRating={changeRating}
      starRatedColor='#facc15'
      starEmptyColor='#e2e8f0'
      starHoverColor='#cbd5e1'
    />
  );
};

export default Rating;
