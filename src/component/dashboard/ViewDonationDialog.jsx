import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, Typography } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import React from 'react';

export default function ViewDonationDialog({ openDialog, onClose }) {
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
            <Typography variant='body2'>Title</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ my: 1}}>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              Fix the pipeline inside the school cantine
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>Description</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>
              The school canteen's tapline was finally fixed after days of leaks and low pressure.
              Workers replaced the worn-out pipes, sealing every joint tightly to prevent drips.
              With a fresh coat of insulation, the system now runs smoothly, ensuring steady water flow.
              No more puddles near the sink—just clean, running water for everyone.
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>Contribution</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              5000 LKR
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>Proof</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <Button

              variant='outlined'
              color='primary'
              size='small'
              startIcon={<FileDownloadOutlinedIcon />}
            >
              name_of_the_document.jpg
            </Button>
          </Grid2>

          <Grid2 size={{ xs: 3 }}>
            <Typography variant='body2'>Created at</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              25 Sep 2025
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 3 }}>
            <Typography variant='body2'>Modified at</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              27 Sep 2025
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 3 }}>
            <Typography variant='body2'>Donor</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }}>
            <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
              John Doe
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 3 }} sx={{ mb: 1 }}>
            <Typography variant='body2'>Status</Typography>
          </Grid2>
          <Grid2 size={{ xs: 9 }} sx={{ mb: 1 }}>
            <Typography component="div" variant='body2'>
              <Chip label="DONE" color="success" variant="contined" size='small' />
            </Typography>
          </Grid2>
        </Grid2>
      </DialogContent>

      <DialogActions>
        <Button
          variant='outlined'
          color='success'
          onClick={onClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};