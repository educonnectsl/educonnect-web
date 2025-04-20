import { Button, Divider, Grid2, TextField, Typography } from '@mui/material';

import React from 'react';
import { useAuth } from '../../context/AuthContext';

const textFieldStyle = { width: { xs: '80%', md: '60%', lg: '40%' } };

const Account = () => {
    const { user } = useAuth();
  return (
    <Grid2 container spacing={2} maxWidth="lg">
      <Grid2 size={{ xs: 12 }} sx={{ px: 2, py: 1 }}>
        <Typography variant='h6'>Account</Typography>
        <Divider />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>Account type</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>{user.user_type}</Typography>
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>First name</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='First name'
          size='small'
        />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>Last name</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='Last name'
          size='small'
        />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>Email</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='Email address'
          size='small'
        />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>Password</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='Password'
          size='small'
          type='password'
        />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>Confirm password</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='Confirm password'
          size='small'
          type='password'
        />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
        <Typography variant='body2'>Location</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='Country/State/Province/City'
          size='small'
          type='text'
        />
      </Grid2>

      <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
        <Typography variant='body2'>Contact</Typography>
      </Grid2>
      <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
        <TextField
          sx={textFieldStyle}
          variant='outlined'
          placeholder='Mobile or telephone number'
          size='small'
        />
      </Grid2>

      <Grid2 size={{ xs: 12 }} sx={{ ml: 2, mb: 1 }}>
        <Button variant='contained' color='primary' size='small'>
          Save
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Account;