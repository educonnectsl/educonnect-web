import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Divider, Grid2, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, PATHS } from '../../../util/Constant';

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
  }
];


const TeacherOverview = () => {
  const navigate = useNavigate();

  const onDonateClick = (index) => {
    // setOpenDonateDialog(true);
  };


  return (
    <>
      <Grid2 container spacing={2} maxWidth="lg">
        <Grid2
          size={{ xs: 12 }}
          sx={{ px: 2, py: 1 }}
        >
          <Typography variant='h6'>Overview</Typography>
          <Divider />
        </Grid2>


        <Grid2
          size={{ xs: 12 }}
          sx={{ mx: 2, mb: 4, borderRadius: 2, background: COLORS.WHITE, textAlign: 'center' }}
        >
          <Button
            variant='text'
            endIcon={<ArrowForwardIcon />}
            size='large'
            onClick={() => navigate(PATHS.DASHBOARD + PATHS.ACCOUNT)}
          >
            Complete your profile
          </Button>
        </Grid2>

        <Grid2 size={{ xs: 12 }} sx={{ mx: 2, mb: 2 }}>
          <Button 
            variant='contained' 
            color='primary' 
            size='small'
            onClick={() => navigate(PATHS.DASHBOARD + PATHS.VIEW_REQUEST + "/0")}
          >
            Create new request
          </Button>
        </Grid2>


        <Grid2
          size={{ xs: 12 }}
          sx={{ mx: 2, mb: 2 }}
        >
          <Typography variant='body1' sx={{ mb: 1 }}>
            Help requests made by your school
          </Typography>
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
                  sx={{ mt: 1 }}
                  fullWidth
                  variant='outlined'
                  onClick={() => navigate(PATHS.DASHBOARD + PATHS.VIEW_REQUEST + "/" + school.index)}
                >
                  View
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default TeacherOverview;