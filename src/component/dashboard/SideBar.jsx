import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { COLORS, PATHS } from '../../util/Constant';
import { stringAvatar } from '../../util/Utils';
import { useNavigate } from 'react-router-dom';

const NAME = "John Doe";

const SideBar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const getButtonStyle = (path) => ({
    mb: 1, mx: 2, borderRadius: 2,
    backgroundColor: currentPath === path ? COLORS.PRIMARY : 'transparent',
    color: currentPath === path ? 'white' : 'inherit',
    '&:hover': {
      backgroundColor: currentPath === path ? COLORS.PRIMARY : COLORS.LIGHT_GRAY,
      cursor: currentPath === path ? 'default' : 'pointer'
    }
  });

  return (
    <Drawer
      PaperProps={{
        sx: { backgroundColor: COLORS.SECONDARY }
      }}
      hideBackdrop={false}
      open={true}
      variant='permanent'
      anchor='left'
      sx={{ backgroundColor: COLORS.SECONDARY }}
      color='secondary'
    >
      <Box sx={{ width: 240 }}>
        <List>
          <ListItem disableGutters disablePadding sx={{ mt: 1, mb: 2 }}>
            <Button
              size='medium'
              disableRipple
              disableFocusRipple
            >
              <img src="logo.png" alt="Logo" style={{ height: '30px' }} />
            </Button>
          </ListItem>

          <ListItem disableGutters disablePadding>
            <ListItemButton 
              sx={{ 
                mb: 2, mx: 2, 
                borderRadius: 2, border: '1px solid', 
                borderColor: COLORS.PRIMARY 
              }}
              onClick={() => navigate(PATHS.DASHBOARD + PATHS.ACCOUNT)}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Avatar {...stringAvatar(NAME, 32)}/> 
                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                  <Typography 
                    variant='body1' 
                    sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
                  >
                    {NAME}
                  </Typography>
                  <Typography 
                    variant='body1' 
                    sx={{ fontWeight: 'light', fontSize: '0.5rem' }}
                  >
                    Donor
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
          
          <ListItem disableGutters disablePadding>
            <ListItemButton 
              sx={getButtonStyle(PATHS.DASHBOARD)}
              onClick={() => navigate(PATHS.DASHBOARD)}
            >
              <ListItemIcon>
                <GridViewOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText 
                primary='Overview' 
                primaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton 
              sx={getButtonStyle(PATHS.DASHBOARD + PATHS.SEARCH)}
              onClick={() => navigate(PATHS.DASHBOARD + PATHS.SEARCH)}
            >
              <ListItemIcon>
                <SearchOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText 
                primary='Search & Donate' 
                primaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ mb: 1 }}/>

          <ListItem disableGutters disablePadding>
            <ListItemButton 
              disabled 
              sx={getButtonStyle(PATHS.DASHBOARD + PATHS.MESSAGES)}
            >
              <ListItemIcon>
                <InboxOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText 
                primary='Messages' 
                primaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <ListItemButton 
              disabled 
              sx={getButtonStyle(PATHS.DASHBOARD + PATHS.NOTIFICATIONS)}
            >
              <ListItemIcon>
                <NotificationsNoneOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText 
                primary='Notifications' 
                primaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ mb: 1 }}/>

          <ListItem disableGutters disablePadding>
            <ListItemButton 
              sx={getButtonStyle(PATHS.DASHBOARD + PATHS.SETTINGS)}
              onClick={() => navigate(PATHS.DASHBOARD + PATHS.SETTINGS)}
            >
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText 
                primary='Settings' 
                primaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;