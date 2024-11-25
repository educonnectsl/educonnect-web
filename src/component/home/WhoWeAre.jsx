import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const WhoWeAre = () => {
  return (
    <Box sx={{ mx: 0, my: 2, display: 'flex', justifyContent: 'center', backgroundColor: 'white'}}>
      <Stack sx={{ py: 5, width: '80%', alignItems: 'center'}}>
        <Typography variant='body1' align='center'>
          About Us
        </Typography>
        <Typography variant='h3' align='center' sx={{ color: COLORS.PRIMARY, pt: 0, pb: 2 }}>
          WHO WE ARE?
        </Typography>
        <Typography variant='p' align='center'>
          EduConnectSL is a platform dedicated to connecting donors,
          NGOs, and communities with schools and students in need across Sri Lanka.
          Our goal is to make education accessible and create sustainable
          development opportunities in local communities.
          Together, we can transform lives and uplift entire regions.
        </Typography>
      </Stack>
    </Box>
  );
};

export default WhoWeAre;