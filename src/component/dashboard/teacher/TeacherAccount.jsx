import { Autocomplete, Button, Divider, Grid2, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const textFieldStyle = { width: { xs: '80%', md: '60%', lg: '40%' } };

const schools = [
    { label: 'Royal College Colombo', id: 1 },
    { label: 'Ananda College', id: 2 },
    { label: 'Nalanda College Colombo', id: 3 },
    { label: 'Musaeus College', id: 4 },
    { label: 'Visakha Vidyalaya', id: 5 },
    { label: 'St. Peter’s College', id: 6 },
    { label: 'St. Joseph’s College', id: 7 },
    { label: 'Trinity College Kandy', id: 8 },
    { label: 'Richmond College Galle', id: 9 },
    { label: 'Mahinda College Galle', id: 10 },
];

const TeacherAccount = () => {
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
                <Typography variant='body2'>Teacher</Typography>
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
                <Typography variant='body2'>School</Typography>
            </Grid2>
            <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
                <Autocomplete
                    size='small'
                    sx={textFieldStyle}
                    variant='outlined'
                    placeholder='Select school'
                    options={schools}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Grid2>

            <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
                <Typography variant='body2'>Position</Typography>
            </Grid2>
            <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 1 }}>
                <Select
                    size='small'
                    sx={textFieldStyle}
                    variant='outlined'
                    placeholder='Select position'
                    defaultValue={'teacher'}
                >
                    <MenuItem value={'principle'}>Principle</MenuItem>
                    <MenuItem value={'teacher'}>Teacher</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                </Select>
            </Grid2>

            <Grid2 size={{ xs: 12 }} sx={{ ml: 2, mb: 1 }}>
                <Button variant='contained' color='primary' size='small'>
                    Save
                </Button>
            </Grid2>
        </Grid2>
    );
};

export default TeacherAccount;