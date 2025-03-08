import { Box, Grid2, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';
import '../../styles/how-it-works.scss';

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
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', backgroundColor: COLORS.LIGHT_PURPLE }}>
      <Stack sx={{ my: 5, width: '80%', alignItems: 'center' }}>
        <Typography variant='body1' align='center'>
          Our process
        </Typography>
        <Typography variant='h3' align='center' sx={{ fontWeight: 'bold', color: COLORS.PRIMARY, mb: 2 }}>
          HOW IT ALL WORKS?
        </Typography>
        <Typography variant='p' align='center'>
          See how EduConnectSL bridges the gap between schools in need and compassionate donors.
          Our platform provides transparent information, empowering donors to make informed decisions and support the schools that need it most.
        </Typography>

        {
          paperContent.map((content, index) => (
            <div className='sticky-card-container'>
              <Paper
                className='sticky-card'
                key={content.step}
                elevation={1}
                square={false}
                variant='elevation'
                sx={{ mt: 4, borderRadius: 2, width: '80%' }}
              >
                <Grid2 sx={{height:'400px'}} container spacing={0}>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <Box sx={{ m: 5, p: 2 }}>
                      <Typography sx={{ mt: 4, color: COLORS.PRIMARY, fontWeight: '600' }} variant='body1'>
                        {content.step}
                      </Typography>
                      <Typography sx={{ mb: 4, fontWeight: '600' }} variant='h4'>
                        {content.title}
                      </Typography>
                      <Typography sx={{ mb: 4 }} variant='p'>
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
            </div>
          ))
        }
      </Stack>
    </Box>
  );
};

export default HowItWorks;
