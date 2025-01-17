import { Box, Container } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../component/dashboard/Account';
import DonorOverview from '../component/dashboard/DonorOverview';
import DonorSettings from '../component/dashboard/DonorSettings';
import SearchAndDonate from '../component/dashboard/SearchAndDonate';
import SideBar from '../component/dashboard/SideBar';
import { COLORS, PATHS } from '../util/Constant';

const DashboardPage = () => {

  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      sx={{height: '100vh', backgroundColor: COLORS.BACKGROUND }}
    >
      <SideBar />

      <Box sx={{ ml: '240px' }}>
        <Routes>
          <Route index element={<DonorOverview />} />
          <Route path={PATHS.ACCOUNT} element={<Account />} />
          <Route path={PATHS.SEARCH} element={<SearchAndDonate />} />
          <Route path={PATHS.SETTINGS} element={<DonorSettings />} />
        </Routes>
      </Box>
      </Container>
  );
};

export default DashboardPage;