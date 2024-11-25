import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const Introduction = () => {
  return (
    <Box sx={{ m: 0, p: 2, pr: 0 }}>
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <Box sx={{ m: 5, mt: 10 }}>
            <Typography variant='h2'>
              Empowering <span style={{ color: COLORS.PRIMARY }}>Eduction</span>
              <br />
              Uplifting Communities in Sri Lanka
            </Typography>
            <Typography variant='h5'>
              Connecting donors with schools and students in need to transform eduction
              and bring positive change to local communities.
            </Typography>
          </Box>
          <Box sx={{ m: 5 }}>
            <Button
              size='medium'
              variant='contained'
              sx={{ mr: 2 }}
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Schools in Need
            </Button>
            <Button
              size='medium'
              variant='outlined'
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Who we are
            </Button>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 0, md: 5, display: { xs: 'none', md: 'flex' } }}>
          <Box
            component="img"
            src="introduction_background.png"
            alt="Introduction Background"
            sx={{
              p: 0, m: 0,
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Introduction;