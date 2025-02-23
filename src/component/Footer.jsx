import React from 'react';
import { COLORS } from '../util/Constant';
import { Box, Grid2, Typography, IconButton, Link, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Copyright } from '@mui/icons-material';
const Footer = () => {
  const linkStyle = { mx: 1, color: COLORS.LIGHT_GRAY, textDecoration: "none" }
  return (
    <Box sx={{ height: '150px', backgroundColor: "#0d0e22", py: 4 }}>
      <Grid2 container spacing={3} justifyContent="space-evenly" alignItems="flex-start">
        <Grid2 sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} item size={{ xs: 12, md: 2 }}>
          <img src="logo.png" alt="Logo" style={{ height: '60px' }} />
          <Typography variant="body1" sx={{ color: COLORS.WHITE }} fontWeight={600} display="flex" alignItems="center" gap={1}>EduConnect</Typography>
          <Typography variant="body2" sx={{ color: COLORS.WHITE }} fontWeight={300} display="flex" alignItems="center" gap={1}>Sri Lanka</Typography>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Stack sx={{ textAlign: "center" }} justifySelf="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
            <Link href="#" sx={linkStyle}>About Us</Link>
            <Link href="#" sx={linkStyle}>Support Categories</Link>
            <Link href="#" sx={linkStyle}>News & Updates</Link>
            <Link href="#" sx={linkStyle}>Partners</Link>
            <Link href="#" sx={linkStyle}>Schools in Need</Link>
          </Stack>

          <Stack sx={{ textAlign: "center", mt: 5 }} justifySelf="center" direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
            <Typography variant="body2" display="flex" alignItems="center" color={COLORS.LIGHT_GRAY} gap={1}>
              <Copyright fontSize="small" /> EduConnectSL. All rights reserved.
            </Typography>
            <Link href="#" sx={linkStyle}>Privacy Policy</Link>
            <Link href="#" sx={linkStyle}>Terms of Service</Link>
            <Link href="#" sx={linkStyle}>Cookie Settings</Link>
          </Stack>
        </Grid2>

        <Grid2 item size={{ xs: 12, md: 2 }} display="flex" justifyContent="flex-start">
          <IconButton><Facebook htmlColor={COLORS.WHITE} /></IconButton>
          <IconButton><Twitter htmlColor={COLORS.WHITE} /></IconButton>
          <IconButton><Instagram htmlColor={COLORS.WHITE} /></IconButton>
          <IconButton><LinkedIn htmlColor={COLORS.WHITE} /></IconButton>
        </Grid2>
      </Grid2>
    </Box>);
};

export default Footer;
