import { Container } from '@mui/material';
import React from 'react';
import Header from '../component/Header';
import Introduction from '../component/home/Introduction';
import { COLORS } from '../util/Constant';

const HomePage = () => {
  return (
    <>
      <Header position='absolute' />

      <Container maxWidth={false} sx={{ backgroundColor: COLORS.SECONDARY }}>
        <Introduction />
      </Container>
    </>
  );
};

export default HomePage;