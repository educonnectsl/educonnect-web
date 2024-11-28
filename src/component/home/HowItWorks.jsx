import { Box, Grid2, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const paperContent = [
  {
    step: 'Step 1',
    title: 'Find a Cause',
    image: 'how_it_works_1.png',
    imageAlt: 'Find a Cause',
    description: 'Explore schools, students, and projects that need your support.'
  },
  {
    step: 'Step 2',
    title: 'Make a Difference',
    image: 'how_it_works_2.png',
    imageAlt: 'Make a Difference',
    description: 'Choose how you want to help - donate, volunteer, or partner with us.'
  },
  {
    step: 'Step 3',
    title: 'Share the Impact',
    image: 'how_it_works_3.png',
    imageAlt: 'Share the Impact',
    description: 'Share the progress of your projects and inspire positive changes.'
  }
]

const HowItWorks = () => {
  return (
    <Box sx={{ mx: 0, my: 2, display: 'flex', justifyContent: 'center', backgroundColor: COLORS.SECONDARY }}>
      <Stack sx={{ py: 5, width: '80%', alignItems: 'center' }}>
        <Typography variant='body1' align='center'>
          How It Works
        </Typography>
        <Typography variant='h3' align='center' sx={{ color: COLORS.PRIMARY, pt: 0, pb: 2 }}>
          HOW EDUCONNECTSL <br /> WORKS?
        </Typography>
        <Typography variant='p' align='center'>
          See how EduConnect SL bridges the gap between schools in need and compassionate donors.
          Explore our streamlined process for identifying school needs, connecting contributors,
          and ensuring your support makes a meaningful impact where it's needed most.
        </Typography>

        {
          paperContent.map((content, index) => (
            <Paper
              key={content.step}
              elevation={1}
              square={false}
              variant='elevation'
              sx={{ mt: 4, borderRadius: 2, width: '80%' }}
            >
              <Grid2 container spacing={0}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                  <Box sx={{ m: 5, p: 2 }}>
                    <Typography sx={{ mt: 4, mb: 2, color: COLORS.PRIMARY }} variant='body1'>
                      {content.step}
                    </Typography>
                    <Typography variant='h5'>
                      {content.title}
                    </Typography>
                    <Typography sx={{ mb: 4 }} variant='body2'>
                      {content.description}
                    </Typography>
                  </Box>
                </Grid2>
                <Grid2 size={{ xs: 0, md: 6 }} sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Box sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${content.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                  }} />
                </Grid2>
              </Grid2>
            </Paper>
          ))
        }
      </Stack>
    </Box>
  );
};

export default HowItWorks;