import { Box } from '@mui/material';
import React from 'react';
import { COLORS } from '../util/Constant';

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.BLACK,
      px: 4, py: 2,
      gap: 2,
    }}>
      <Box sx={{ px: 5 }}>
        <p>Logo</p>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <p>menu items</p>
      </Box>
      <Box sx={{ px: 5 }}>
        <p>social media</p>
      </Box>
    </Box>
  );
};

export default Footer;