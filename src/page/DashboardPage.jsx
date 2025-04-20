import { Box, Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DonorAccount from '../component/dashboard/donor/DonorAccount';
import DonorOverview from '../component/dashboard/donor/DonorOverview';
import ViewRequest from '../component/dashboard/donor/ViewRequest';
import SideNavigation from '../component/dashboard/SideNavigation';
import TeacherAccount from '../component/dashboard/teacher/TeacherAccount';
import TeacherOverview from '../component/dashboard/teacher/TeacherOverview';
import { COLORS, PATHS, USER_TYPES } from '../util/Constant';
import UpdateRequest from '../component/dashboard/teacher/UpdateRequest';
import { useAuth } from '../context/AuthContext';


const DashboardPage = () => {
const userRole = useAuth().user?.user_type;
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
          {userRole === USER_TYPES.DONOR && (
            <>
              <Route index element={<DonorOverview />} />
              <Route path={PATHS.ACCOUNT} element={<DonorAccount />} />
              <Route path={PATHS.VIEW_REQUEST + PATHS.ID_PARAM} element={<ViewRequest />} />
            </>
          )}
          {userRole === USER_TYPES.TEACHER && (
            <>
              <Route index element={<TeacherOverview />} />
              <Route path={PATHS.ACCOUNT} element={<TeacherAccount />} />
              <Route path={PATHS.VIEW_REQUEST + PATHS.ID_PARAM} element={<UpdateRequest />} />
            </>
          )}
        </Routes>
      </Box>
    </Container>
  );
};

export default DashboardPage;