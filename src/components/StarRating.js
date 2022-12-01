import React from 'react';
import { Rating } from '@mui/material';
import { bool, number, range } from 'prop-types';

const StarRating = ({ value, isReadOnly, isDisabled }) => {
  return (
    <Rating 
        value={value}
        readOnly={isReadOnly}
        disabled={isDisabled}
        precision={0.1}
    />
  );
}

StarRating.propTypes = {
    value: number,
    isReadOnly: bool
}

export default StarRating;