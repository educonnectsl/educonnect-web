import { Box, Grid2, imageListItemBarClasses, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const paperContent = [
  {
    step: 'Step 1',
    title: 'Find a Cause',
    image: 'find_a_cause.png',
    imageAlt: 'Find a Cause',
    description: ''
  },
  {
    step: 'Step 2',
    title: 'Make a Difference',
    image: 'find_a_cause.png',
    imageAlt: 'Find a Cause',
    description: ''
  },
  {
    step: 'Step 3',
    title: 'Share the Impact',
    image: 'find_a_cause.png',
    imageAlt: 'Find a Cause',
    description: ''
  }
]

const HowItWorks = () => {
  return (
    <Box sx={{ mx: 0, my: 2, display: 'flex', justifyContent: 'center', backgroundColor: COLORS.SECONDARY }}>
      <Stack sx={{ py: 5, width: '80%', alignItems: 'center' }}>
        <Typography variant='body1' align='center'>
          How It works
        </Typography>
        <Typography variant='h3' align='center' sx={{ color: COLORS.PRIMARY, pt: 0, pb: 2 }}>
          HOW EDUCONNECTSL <br /> WORKS?
        </Typography>
        <Typography variant='p' align='center'>
          See how EduConnect SL bridges the gap between schools in need and compassionate donors.
          Explore our streamlined process for identifying school needs, connecting contributors,
          and ensuring your support makes a meaningful impact where it's needed most.
        </Typography>

        <Paper elevation={1} square={false} variant='elevation' sx={{ my: 5, p: 0 }}>
          <Grid2 container spacing={5}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 5, backgroundColor: COLORS.PRIMARY }}>
                <p>descriptions goes here</p>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 0, md: 5, display: { xs: 'none', md: 'flex' } }}>
              <Box
                component="img"
                src="introduction_background.png"
                alt="Introduction Background"
                sx={{ width: '100%', objectFit: 'cover'}}
              />
            </Grid2>
          </Grid2>
        </Paper>
      </Stack>
    </Box>
  );
};

export default HowItWorks;