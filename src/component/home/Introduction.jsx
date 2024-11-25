import { Box, Grid2 } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const Introduction = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.PRIMARY, my: 5, height: 500 }}>
      <Grid2 container spacing={0}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <h1>Introduction title is here</h1>
          <p>Introduction content is here</p>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 0, display: { xs: 'none', md: 'flex' } }}>
          <h1>Image is here</h1>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Introduction;