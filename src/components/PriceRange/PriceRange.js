import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const PriceRange = ({ value1, value2, setValue1, setValue2 }) => {
  const minDistance = 10;

  const [rangeValue, setRangeValue] = useState([value1, value2]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setRangeValue([
        Math.min(newValue[0], Number(value2) - minDistance),
        Number(value2),
      ]);
      setValue1(newValue[0]);
    } else {
      setRangeValue([
        Number(value1),
        Math.max(newValue[1], Number(value1) + minDistance),
      ]);
      setValue2(newValue[1]);
    }
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={rangeValue}
        onChange={handleChange}
        valueLabelDisplay='auto'
        disableSwap
        min={500}
        max={15000}
        // step={20}
        color='secondary'
      />
    </Box>
  );
};

export default PriceRange;
