import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const GetInvolved = () => {
  return (
    <Box sx={{ mx: 0, my: 2, display: 'flex', backgroundColor: 'white' }}>
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box sx={{ m: 5, mt: 10 }}>
            <Typography variant='body1'>
              Get Involved
            </Typography>
            <Typography variant='h3' sx={{ color: COLORS.PRIMARY, pt: 0, pb: 2 }}>
              JOIN US IN MAKING A DIFFERENCE
            </Typography>
            <Typography variant='p'>
              Join us in making a lasting difference. Whether you're a donor or a teacher, 
              explore how you can play a vital role in transforming education for schools in need across Sri Lanka.
            </Typography>
          </Box>
          <Box sx={{ m: 5 }}>
            <Button
              size='medium'
              variant='contained'
              sx={{ mr: 2 }}
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Need to Help
            </Button>
            <Button
              size='medium'
              variant='outlined'
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Help Needed
            </Button>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 0, md: 5, display: { xs: 'none', md: 'flex' } }}>
          <Box
            component="img"
            src="get_involved_background.png"
            alt="Introduction Background"
            sx={{
              mt: 5,
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default GetInvolved;