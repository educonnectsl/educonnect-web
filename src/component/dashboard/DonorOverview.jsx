import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider, Grid2, IconButton, InputBase, Paper, Typography } from '@mui/material';
import React from 'react';
import { COLORS, PATHS } from '../../util/Constant';
import { useNavigate } from 'react-router-dom';

const schoolResult = [
  {
    index: 1,
    title: 'Provide Essential classroom furniture',
    description: 'We need 50 desks and chairs for our students. We have a total of 100 students in our school. We are located in a rural area and most of our students come from low-income families.',
  },
  {
    index: 2,
    title: 'Upgrade Science Lab Equipment',
    description: 'Our science lab lacks modern equipment. We need microscopes, test tubes, and other essential tools to provide a better learning experience for our students.',
  },
  {
    index: 3,
    title: 'Library Books Donation',
    description: 'Our library is in need of new books. We aim to provide a diverse range of books to encourage reading among our students.',
  },
  {
    index: 4,
    title: 'Sports Equipment for Physical Education',
    description: 'We need sports equipment such as footballs, basketballs, and nets to enhance our physical education program.',
  },
  {
    index: 5,
    title: 'Install Clean Drinking Water Facility',
    description: 'Our school lacks a clean drinking water facility. We need funds to install water filters and ensure safe drinking water for our students.',
  },
  {
    index: 6,
    title: 'Renovate School Building',
    description: 'The school building is old and needs renovation. We need funds to repair the roof, paint the walls, and fix broken windows.',
  },
  {
    index: 7,
    title: 'Provide School Uniforms',
    description: 'Many of our students cannot afford school uniforms. We need donations to provide uniforms to those in need.',
  },
  {
    index: 8,
    title: 'Set Up Computer Lab',
    description: 'We aim to set up a computer lab to teach our students basic computer skills. We need computers, desks, and chairs for the lab.',
  },
  {
    index: 9,
    title: 'Support for Extracurricular Activities',
    description: 'We want to introduce extracurricular activities such as music, dance, and art. We need funds to hire instructors and buy necessary materials.',
  },
  {
    index: 10,
    title: 'Build a Playground',
    description: 'Our school lacks a proper playground. We need funds to build a safe and engaging playground for our students.',
  },
  {
    index: 11,
    title: 'Provide Nutritious Meals',
    description: 'Many of our students come to school without having breakfast. We need funds to provide nutritious meals to ensure they can focus on their studies.',
  }
];

const DonorOverview = () => {
  const navigate = useNavigate();

  return (
    <Grid2 container spacing={2} maxWidth="lg">
      <Grid2
        size={{ xs: 12 }}
        sx={{ px: 3, py: 1 }}
      >
        <Typography variant='h6'>Overview</Typography>
        <Divider />
      </Grid2>


      <Grid2
        size={{ xs: 12 }}
        sx={{ mx: 2, mb: 2, borderRadius: 2, background: COLORS.WHITE, textAlign: 'center' }}
      >
        <Button
          variant='text'
          endIcon={<ArrowForwardIcon />}
          size='large'
        >
          Complete your profile
        </Button>
      </Grid2>


      <Grid2
        size={{ xs: 4 }}
        sx={{ ml: 2, mb: 2 }}
      >
        <Paper sx={{ p: 2, borderRadius: 2, background: COLORS.WHITE }}>
          <Typography variant='h7'>Total donations made</Typography>
          <Typography variant='h2' color={COLORS.PRIMARY}>__</Typography>
        </Paper>
      </Grid2>
      <Grid2
        size={{ xs: 4 }}
        sx={{ mx: 2, mb: 2 }}
      >
        <Paper sx={{ p: 2, borderRadius: 2, background: COLORS.WHITE }}>
          <Typography variant='h7'>Number of schools supported</Typography>
          <Typography variant='h2' color={COLORS.PRIMARY}>__</Typography>
        </Paper>
      </Grid2>


      <Grid2
        size={{ xs: 12 }}
        sx={{ mx: 2, mb: 2 }}
      >
        <Typography variant='body1' sx={{ mb: 1 }}>Search schools</Typography>
        <Box
          sx={{ p: 2, borderRadius: 2, background: COLORS.WHITE }}
        >
          <Typography variant='body2'>Find and support schools in need</Typography>
          <Paper
            component="form"
            sx={{ my: 1, display: 'flex', alignItems: 'center', width: '50%', minWidth: '350px' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search schools"
            />
            <IconButton type="button" sx={{ p: '10px' }}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Grid2>


      <Grid2
        size={{ xs: 12 }}
        sx={{ mx: 2, mb: 2 }}
      >
        <Typography variant='body1' sx={{ mb: 1 }}>Recent help requests from schools</Typography>
        <Grid2 container spacing={2}>
          {schoolResult.map((school, index) => (
            <Grid2
              key={school.index}
              size={{ xs: 12, md: 6, lg: 4 }}
              component={Paper}
              sx={{ p: 2, borderRadius: 2, background: COLORS.WHITE }}
            >
              <Typography
                variant='body2'
                sx={{ fontWeight: 'bold', mb: 2 }}
              >{school.title}</Typography>
              <Typography variant='body2'>{school.description}</Typography>
              <Button
                sx={{ mt: 2 }}
                fullWidth
                variant='contained'
              >
                Donate
              </Button>
              <Button
                sx={{ mt: 1 }}
                fullWidth
                variant='outlined'
                onClick={() => navigate(PATHS.DASHBOARD + PATHS.VIEW_REQUEST +  "/" + school.index)}
              >
                View
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default DonorOverview;