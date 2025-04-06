import { Box, Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DonorAccount from '../component/dashboard/donor/DonorAccount';
import DonorOverview from '../component/dashboard/DonorOverview';
import SideNavigation from '../component/dashboard/SideNavigation';
import TeacherAccount from '../component/dashboard/teacher/TeacherAccount';
import ViewRequest from '../component/dashboard/ViewRequest';
import { COLORS, PATHS, USER_ROLES } from '../util/Constant';

const userRole = USER_ROLES.TEACHER; // This should be dynamically set based on the logged-in user

const DashboardPage = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ minHeight: '100vh', backgroundColor: COLORS.BACKGROUND, display: 'flex' }}
    >
      <SideNavigation />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: 0,
          transition: (theme) =>
            theme.transitions.create('margin-left', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          padding: 2,
        }}
      >
        <Routes>
          {userRole === USER_ROLES.DONOR && (
            <>
              <Route index element={<DonorOverview />} />
              <Route path={PATHS.ACCOUNT} element={<DonorAccount />} />
            </>
          )}
          {userRole === USER_ROLES.TEACHER && (
            <>
              <Route index element={<DonorOverview />} />
              <Route path={PATHS.ACCOUNT} element={<TeacherAccount />} />
            </>
          )}
          <Route path={PATHS.VIEW_REQUEST + PATHS.ID_PARAM} element={<ViewRequest />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default DashboardPage;