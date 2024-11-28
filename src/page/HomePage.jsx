import { Container } from '@mui/material';
import React from 'react';
import Header from '../component/Header';
import Introduction from '../component/home/Introduction';
import { COLORS } from '../util/Constant';
import WhoWeAre from '../component/home/WhoWeAre';
import HowItWorks from '../component/home/HowItWorks';
import GetInvolved from '../component/home/GetInvolved';

const HomePage = () => {
  return (
    <>
      <Header position='absolute' />

      <Container disableGutters maxWidth={false} sx={{ backgroundColor: COLORS.SECONDARY }}>
        <Introduction />
        <WhoWeAre />
        <HowItWorks />
        <GetInvolved />
      </Container>
    </>
  );
};

export default HomePage;