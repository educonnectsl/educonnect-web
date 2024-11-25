import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../util/Constant';

const pages = ['Support Categories', 'News', 'Contact', 'About'];

const iconStyles = {
  display: { xs: 'none', md: 'inline-flex' }
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const notLoginPath = location.pathname !== PATHS.LOGIN;
  const notSignUpPath = location.pathname !== PATHS.SIGN_UP;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAvatarOnClick = () => {
    setLoggedIn(!loggedIn);
  };

  const handleLoginOnClick = () => {
    navigate(PATHS.LOGIN);
  };

  const handleSignUpOnClick = () => {
    navigate(PATHS.SIGN_UP);
  };

  const handleHomeOnClick = () => {
    navigate(PATHS.HOME)
  };

  return (
    <AppBar position="sticky" color='secondary' sx={{ minWidth: 720 }}>
      <Container maxWidth='false'>
        <Toolbar variant='dense' disableGutters sx={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <Box sx={{ flexShrink: 0 }}>
            <Button
              size='small'
              onClick={handleHomeOnClick}
            >
              <img src="logo.png" alt="Logo" style={{ height: '30px' }} />
            </Button>
          </Box>

          {/* web view links */}
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            flexGrow: 1,
            justifyContent: 'center',
            gap: 2
          }}>
            {pages.map((page) => (
              <Button key={page} size='small'>
                {page}
              </Button>
            ))}
          </Box>

          {/* mobile view menu items */}
          <Box sx={{
            display: { xs: 'flex', md: 'none' },
          }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'row',
            ml: 'auto',
            gap: 1
          }}>
            {(!loggedIn && notLoginPath) && (
              <Button
                onClick={handleLoginOnClick}
                size='small'
                endIcon={<ArrowForwardOutlinedIcon sx={iconStyles} />}
              >
                Login
              </Button>
            )}
            {(!loggedIn && notSignUpPath) && (
              <Button
                onClick={handleSignUpOnClick}
                size='small'
                startIcon={<AccountCircleOutlinedIcon sx={iconStyles} />}
              >
                Signup
              </Button>
            )}
            {loggedIn && (
              <IconButton onClick={handleAvatarOnClick}>
                <Avatar alt="Lahiru Sampath" src="/static/images/avatar/2.jpg" />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;