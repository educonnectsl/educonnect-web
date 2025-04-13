import { Button, Divider, Grid2, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import DonationHistory from '../DonationHistory';
import ViewDonationDialog from '../ViewDonationDialog';

const textFieldStyle = { width: { xs: '80%', md: '100%' } };

const UpdateRequest = () => {
  const [openViewDonationDialog, setOpenViewDonationDialog] = useState(false);

  const onDonationDialogClose = () => {
    setOpenViewDonationDialog(false);
  }

  const onDonateHistoryEntryClick = () => {
    setOpenViewDonationDialog(true);
  }

  return (
    <>
      <Grid2 container spacing={2} maxWidth="lg">
        <Grid2 size={{ xs: 12 }} sx={{ px: 2, py: 1 }}>
          <Typography variant='h6'>Edit Request</Typography>
          <Divider />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Title</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            placeholder='Request title'
            size='small'
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>School</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Mahinda Collect, Galle</Typography>
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Description</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <TextField
            sx={textFieldStyle}
            variant='outlined'
            placeholder='Request title'
            size='small'
            rows={15}
            maxRows={1000}
            minRows={1}
            multiline
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Requested by</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>John Doe</Typography>
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Created on</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>27 Sep 2025</Typography>
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Cost estimation</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <TextField
            sx={{ width: { xs: '50%', md: '30%' } }}
            variant='outlined'
            placeholder='Estimation'
            size='small'
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">LKR</InputAdornment>,
              }
            }}
          />
        </Grid2>

        <Grid2 size={{ md: 2, xs: 12 }} sx={{ ml: 2 }}>
          <Typography variant='body2'>Status</Typography>
        </Grid2>
        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2 }}>
          <Select
            sx={{ width: { xs: '50%', md: '30%' } }}
            variant='outlined'
            size='small'
            placeholder='Select status'
          >
            <MenuItem value="New">NEW</MenuItem>
            <MenuItem value="ONGOING">ONGOING</MenuItem>
            <MenuItem value="CANCELLED">CANCELLED</MenuItem>
            <MenuItem value="COMPLETED">COMPLETED</MenuItem>
          </Select>
        </Grid2>

        <Grid2 size={{ xs: 12 }} sx={{ ml: 2, mb: 3 }}>
          <Button variant='contained' color='primary' size='small'>
            Save
          </Button>
        </Grid2>


        <Grid2 size={{ xs: 12 }} sx={{ px: 2, py: 1 }}>
          <Typography variant='h6'>Donation History</Typography>
          <Divider />
        </Grid2>

        <Grid2 size={{ md: 9, xs: 12 }} sx={{ ml: 2, mb: 3 }}>
          <DonationHistory onEntryClick={onDonateHistoryEntryClick} />
        </Grid2>

      </Grid2>

      <ViewDonationDialog openDialog={openViewDonationDialog} onClose={onDonationDialogClose} />
    </>
  )
};

export default UpdateRequest;
