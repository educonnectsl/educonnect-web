import { Box, Button, Container, Grid2, Link, TextField, Typography } from '@mui/material';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CustomSnackbar from '../component/CustomSnackbar';
import Header from '../component/Header';
import { useAuth } from '../context/AuthContext';
import useSnackbar from '../hooks/useSnackbar';
import { COLORS, PATHS } from '../util/Constant';

const LoginPage = () => {
  const { snackBarState, showSnackbar, hideSnackbar } = useSnackbar();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginOnClick = async () => {
    try {
      await login(email, password);
      navigate(PATHS.DASHBOARD);
    } catch (error) {
      showSnackbar(error.response?.data || error.message, "error");
    }
  };

  return (
    <>
      <Header position='absolute' />
      <CustomSnackbar
        open={snackBarState.open}
        message={snackBarState.message}
        status={snackBarState.status}
        onClose={hideSnackbar}
        autoHideDuration={snackBarState.autoHideDuration}
      />
      <Container maxWidth='md' sx={{ p: 2, minWidth: 720 }}>
        <Grid2 container spacing={1} sx={{ m: 4, p: 2, backgroundColor: COLORS.LIGHT_GRAY }}>
          <Grid2 size={{ xs: 0, md: 5, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{
              height: '100%',
              width: '100%',
              borderRadius: 2,
              backgroundImage: 'url(login.jpg)',
              backgroundSize: 'cover'
            }} />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }} sx={{ backgroundColor: 'white', borderRadius: 2 }}>
            <Box sx={{ height: '100%' }}>

              <Grid2 container spacing={0} direction='row' sx={{ p: 2 }}>
                <Grid2 size={12} sx={{ mt: 2, mb: 6, mx: 6 }}>
                  <Box>
                    <Typography variant='h4' align='center'>Welcome back</Typography>
                  </Box>
                  <Box>
                    <Typography variant='body1' align='center'>Please enter your account details</Typography>
                  </Box>
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='Email'
                    variant='outlined'
                    required
                    type='email'
                    size='small'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: '100%' }}
                  />
                </Grid2>

                <Grid2 size={12} sx={{ mt: 0, mb: 4, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    label='Password'
                    variant='outlined'
                    required
                    type='password'
                    size='small'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    sx={{ width: '100%' }}
                  />
                </Grid2>

                {/* <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 0, pl: 6, display: 'flex', justifyContent: 'left' }}>
                  <FormControlLabel
                    sx={{ m: 0, p: 0 }}
                    control={<Checkbox size='small' sx={{ m: 0, p: 0 }} defaultChecked />}
                    label="Remember me"
                    size='small'
                  />
                </Grid2> */}
                {/* <Grid2 size={6} sx={{ mt: 0, mb: 2, mx: 0, pr: 6, display: 'flex', justifyContent: 'right' }}>
                  <Typography variant='a' align='right'>
                    Forgot password?
                  </Typography>
                </Grid2> */}

                <Grid2 size={12} sx={{ mt: 0, mb: 4, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant='contained'
                    size='small'
                    sx={{ width: '100%' }}
                    onClick={handleLoginOnClick}
                  >
                    Login
                  </Button>
                </Grid2>
                {/* <Grid2 size={12} sx={{ mt: 0, mb: 0, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <Divider>or</Divider>
                </Grid2>
                <Grid2 size={12} sx={{ mt: 0, mb: 4, mx: 6, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant='outlined'
                    size='small'
                    sx={{ width: '100%', textTransform: 'none' }}
                    onClick={handleLoginOnClick}
                  >
                    <GoogleIcon sx={{ width: 15, height: 15, mx: 1 }} />
                    Login with Google
                  </Button>
                </Grid2> */}

                <Grid2 size={12} sx={{ mt: 0, mb: 2, mx: 6, height: 'auto' }}>
                  <Typography variant='body1' align='center'>
                    Don't have an account?&nbsp;
                    <Link href='/signup' variant='inherit' underline='hover'>Sign up</Link>
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

export default LoginPage;