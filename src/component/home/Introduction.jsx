import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, Button, Grid2, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';

const Introduction = () => {
  return (
    <Box sx={{ p: 4, pr: 0, backgroundColor: COLORS.LIGHT_PURPLE }}>
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box sx={{ m: 5, mt: 10 }}>
            <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
              Empowering <span style={{ color: COLORS.PRIMARY }}>Eduction</span>
              <br />
              Uplifting Communities in Sri Lanka
            </Typography>
            <Typography variant='p'>
              Connecting donors with schools and students in need to transform eduction
              and bring positive change to local communities.
            </Typography>
          </Box>
          <Box sx={{ m: 5, mb: 10 }}>
            <Button
              size='medium'
              variant='contained'
              sx={{ mr: 2 }}
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Need to help
            </Button>
            <Button
              size='medium'
              variant='outlined'
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Help needed
            </Button>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 0, md: 6, display: { xs: 'none', md: 'flex' } }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url(introduction_background.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Introduction;