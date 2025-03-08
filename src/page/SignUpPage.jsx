import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button, Container, Divider, Grid2, Link, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useState } from "react";
import Header from '../component/Header';
import { COLORS, PATHS } from '../util/Constant';
import { useNavigate } from 'react-router-dom';

const SIGNUP_TYPE = { TEACHER: 'Teacher', DONOR: 'Donor' };

const SignUpPage = () => {
  const [signUpType, setSignUpType] = useState(undefined);
  const navigate = useNavigate();

  const handleSignUpOnClick = () => {
    navigate(PATHS.DASHBOARD);

    setSignUpType('sdf');
    console.log(signUpType);
  };

  return (
    <>
      <Header position='absolute' />

      <Container maxWidth='md' sx={{ p: 2, minWidth: 720 }}>
        <Grid2 container spacing={1} sx={{ m: 4, p: 2, backgroundColor: COLORS.LIGHT_GRAY }}>
          <Grid2 size={{ xs: 0, md: 4, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{
              height: '100%',
              width: '100%',
              borderRadius: 2,
              backgroundImage: 'url(signup.jpg)',
              backgroundSize: 'cover'
            }} />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }} sx={{ backgroundColor: 'white', borderRadius: 2 }}>
            <Box sx={{ height: '100%' }}>

              <Grid2 container spacing={0} direction='row' sx={{ p: 2 }}>
                <Grid2 size={12} sx={{ mt: 2, mb: 6, mx: 6 }}>
                  <Box>
                    <Typography variant='h4' align='center'>Create an account</Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1' align='center'>Please enter your details</Typography>
                  </Box>
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 4, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <ToggleButtonGroup
                    sx={{ width: '80%', justifyContent: 'center' }}
                    exclusive
                  >
                    <ToggleButton sx={{ width: '50%' }} value={SIGNUP_TYPE.TEACHER}>
                      {SIGNUP_TYPE.TEACHER}
                    </ToggleButton>
                    <ToggleButton sx={{ width: '50%' }} value={SIGNUP_TYPE.DONOR}>
                      {SIGNUP_TYPE.DONOR}
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid2>

                <Grid2 size={6} sx={{ mt: 0, mb: 2, pl: 6, pr: 1, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='First name'
                    variant='outlined'
                    required
                    size='small'
                    sx={{ width: '100%' }}
                  />
                </Grid2>
                <Grid2 size={6} sx={{ mt: 0, mb: 2, pl: 1, pr: 6, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='Last name'
                    variant='outlined'
                    size='small'
                    sx={{ width: '100%' }}
                  />
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='Email'
                    variant='outlined'
                    required
                    type='email'
                    size='small'
                    sx={{ width: '100%' }}
                  />
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='Password'
                    variant='outlined'
                    required
                    type='password'
                    size='small'
                    sx={{ width: '100%' }}
                  />
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 4, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='Confirm password'
                    variant='outlined'
                    required
                    type='password'
                    size='small'
                    sx={{ width: '100%' }}
                  />
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 0, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant='contained'
                    size='small'
                    sx={{ width: '100%' }}
                    onClick={handleSignUpOnClick}
                  >
                    Create an account
                  </Button>
                </Grid2>
                <Grid2 size={12} sx={{ mt: 0, mb: 0, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <Divider>or</Divider>
                </Grid2>
                <Grid2 size={12} sx={{ mt: 0, mb: 4, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant='outlined'
                    size='small'
                    sx={{ width: '100%', textTransform: 'none' }}
                    onClick={handleSignUpOnClick}
                  >
                    <GoogleIcon sx={{ width: 15, height: 15, mx: 1 }} />
                    Signup with Google
                  </Button>
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 6, height: 'auto' }}>
                  <Typography variant='body1' align='center'>
                    Already have an account?&nbsp;
                    <Link href='/login' variant='inherit' underline='hover'>Login</Link>
                  </Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default SignUpPage;