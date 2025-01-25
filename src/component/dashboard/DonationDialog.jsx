import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';

export default function DonationDialog({ openDialog, onClose }) {

  return (
    <Dialog
      open={openDialog}
      onClose={onClose}
      fullWidth={true}
      maxWidth='md'
      sx={{ p: 2 }}
    >
      <DialogTitle>
        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
          Donation details
        </Typography>
      </DialogTitle>

      <DialogContent >
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 3 }} sx={{ my: 1 }}>
            <Typography variant='body2'>
              Title
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ my: 1 }}>
            <TextField
              fullWidth
              variant='outlined'
              placeholder='Enter title'
              size='small'
            />
          </Grid2>

          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>
              Description
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <TextField
              fullWidth
              variant='outlined'
              placeholder='Short summary of the work'
              size='small'
              multiline
              maxRows={5}
              rows={5}
            />
          </Grid2>

          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>
              Estimation
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <TextField
              variant='outlined'
              placeholder='Estimated cost'
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="start">LKR</InputAdornment>,
                },
              }}
              size='small'
              type='number'
            />
          </Grid2>
          
          <Grid2 size={{ xs: 3 }}>
            <Typography variant='body2'>Created by</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }}>
            <Typography variant='body2'>John Doe</Typography>
          </Grid2>
          <Grid2 size={{ xs: 3 }}>
            <Typography variant='body2'>Created at</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }}>
            <Typography variant='body2'>25 Sep 2025</Typography>
          </Grid2>
          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>Status</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>NEW</Typography>
          </Grid2>
        </Grid2>
      </DialogContent>

      <DialogActions>
        <Button
          variant='outlined'
          color='warning'
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={onClose}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}