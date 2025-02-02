import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const WhoWeAre = () => {
  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', backgroundColor: COLORS.WHITE }}>
      <Stack sx={{ my: 5, width: '80%', alignItems: 'center' }}>
        <Typography variant='body1' align='center'>
          About us
        </Typography>
        <Typography variant='h3' align='center' sx={{ fontWeight: 'bold', color: COLORS.PRIMARY, mb: 2 }}>
          WHO WE ARE?
        </Typography>
        <Typography variant='p' align='center'>
          EduConnectSL connects donors, NGOs, and communities with schools and students in need across Sri Lanka.
          Our mission is to make education accessible and create sustainable opportunities for local communities. 
          Through collective effort, we can strengthen Sri Lanka’s education system and create a brighter future for students.
        </Typography>
      </Stack>
    </Box>
  );
};

export default WhoWeAre;