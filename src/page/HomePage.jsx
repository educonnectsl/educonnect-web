import { Container } from '@mui/material';
import React from 'react';
import Header from '../component/Header';
import GetInvolved from '../component/home/GetInvolved';
import HowItWorks from '../component/home/HowItWorks';
import Introduction from '../component/home/Introduction';
import WhoWeAre from '../component/home/WhoWeAre';
import Footer from '../component/Footer';

const HomePage = () => {
  return (
    <>
      <Header position='absolute' />

      <Container disableGutters maxWidth="false">
        <Introduction />
        <WhoWeAre />
        <HowItWorks />
        <GetInvolved />
      </Container>

      <Footer />
    </>
  );
};

export default HomePage;