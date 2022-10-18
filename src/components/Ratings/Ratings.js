import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styled from '@emotion/styled';

export default function Ratings({ value }) {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#3a204d',
    },
    // '& .MuiRating-iconHover': {
    //   color: '#ff3d47',
    // },
  });
  return (
    <Stack spacing={1}>
      <StyledRating
        name='half-rating-read'
        defaultValue={3.5}
        value={value}
        precision={0.5}
        readOnly
        size='large'
      />
    </Stack>
  );
}
