import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, PATHS, USER_ROLES } from '../../util/Constant';
import { stringAvatar } from '../../util/Utils';

const NAME = "John Doe";
const ROLE = USER_ROLES.DONOR;


const MENU_ITEMS = {
  donor: [
    { name: 'Overview', menuPath: PATHS.DASHBOARD, enabled: true },
    { name: 'Messages', menuPath: PATHS.DASHBOARD + PATHS.MESSAGES, enabled: false },
    { name: 'Notifications', menuPath: PATHS.DASHBOARD + PATHS.NOTIFICATIONS, enabled: false }
  ],
  teacher: [
    { name: 'Overview', menuPath: PATHS.DASHBOARD, enabled: true },
    { name: 'Messages', menuPath: PATHS.DASHBOARD + PATHS.MESSAGES, enabled: false },
    { name: 'Notifications', menuPath: PATHS.DASHBOARD + PATHS.NOTIFICATIONS, enabled: false }
  ]
};

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
                    {ROLE}
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>

          {MENU_ITEMS[ROLE.toLowerCase()].map((menuItem, index) => {
            return (
              <ListItem key={`item-${index}`} disableGutters disablePadding>
                <ListItemButton
                  sx={getButtonStyle(menuItem.menuPath)}
                  onClick={() => menuItem.enabled && navigate(menuItem.menuPath)}
                  disabled={!menuItem.enabled}
                >
                  <ListItemIcon>
                    {menuItem.name === 'Overview' && <GridViewOutlinedIcon fontSize="small" />}
                    {menuItem.name === 'Messages' && <InboxOutlinedIcon fontSize="small" />}
                    {menuItem.name === 'Notifications' && <NotificationsNoneOutlinedIcon fontSize="small" />}
                    {menuItem.name === 'Settings' && <SettingsOutlinedIcon fontSize="small" />}
                  </ListItemIcon>
                  <ListItemText
                    primary={menuItem.name}
                    primaryTypographyProps={{ fontSize: '0.75rem' }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;