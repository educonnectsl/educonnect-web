import { Menu } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Box,
  Drawer,
  IconButton,
  List, ListItem, ListItemIcon,
  ListItemText, Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, PATHS } from '../../util/Constant';

const drawerWidth = 240;

const SideNavigation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:720px)');

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getButtonStyle = (path) => ({
    backgroundColor: currentPath === path ? COLORS.LIGHT_GRAY : COLORS.SECONDARY,
    color: currentPath === path ? 'black' : 'inherit',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: currentPath === path ? COLORS.LIGHT_GRAY : COLORS.SECONDARY,
    }
  });

  if (isSmallScreen || isCollapsed) {
    return (
      <Box sx={{ backgroundColor: COLORS.SECONDARY }}>
        <Toolbar>
          <IconButton onClick={handleToggle}>
            <Menu />
          </IconButton>
        </Toolbar>
      </Box>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        backgroundColor: COLORS.SECONDARY,
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: COLORS.SECONDARY, // Set background color for the drawer
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          onClick={() => navigate(PATHS.HOME)}
        >
          <img src="./logo.png" alt="Logo" style={{ width: 24, height: 24 }} />
        </IconButton>
        <IconButton
          onClick={handleToggle}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <List>
        <ListItem button
          onClick={() => navigate(PATHS.DASHBOARD)}
          sx={getButtonStyle(PATHS.DASHBOARD)}
        >
          <ListItemIcon>
            <GridViewOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button
          onClick={() => navigate(PATHS.DASHBOARD + PATHS.ACCOUNT)}
          sx={getButtonStyle(PATHS.DASHBOARD + PATHS.ACCOUNT)}
        >
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>

        <ListItem button
          onClick={() => navigate(PATHS.HOME)}
          sx={getButtonStyle(PATHS.HOME)}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNavigation;