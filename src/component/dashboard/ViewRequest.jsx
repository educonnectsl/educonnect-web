import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Grid2, Typography } from '@mui/material';
import React, { useState } from 'react';
import { stringAvatar } from '../../util/Utils';
import DonationHistory from './DonationHistory';
import DonationDialog from './DonationDialog';

const ViewRequest = () => {
  const [openDonationDialog, setOpenDonationDialog] = useState(false);

  const onDonateClick = () => {
    setOpenDonationDialog(true);
  }

  const onDonationDialogClose = () => {
    setOpenDonationDialog(false);
  }

  return (
    <>
      <Grid2 container spacing={2} maxWidth="lg">
        <Grid2
          size={{ xs: 12 }}
          sx={{ px: 3, py: 1 }}
        >
          <Typography variant='h6'>Help Request</Typography>
          <Divider />
        </Grid2>

        <Grid2
          size={{ xs: 8 }}
          sx={{ pl: 3, mb: 2 }}
        >
          <Typography variant='body1' sx={{ mb: 2, fontWeight: 'bold' }}>
            Install Clean Drinking Water Facility
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus vestibulum, nulla non ultrices consequat, urna nulla posuere lacus, at lacinia ligula sapien nec quam.
              Integer facilisis, sapien vel dignissim vestibulum, justo purus interdum augue, non scelerisque magna orci non augue.
              Vestibulum at malesuada lectus. Suspendisse potenti.
              Quisque faucibus, erat id aliquam facilisis, ligula felis tempus eros, in ultrices lacus nisi et elit.
              Praesent venenatis nisi quis dui laoreet tristique.
              Pellentesque in tortor nec velit gravida sodales non nec magna. Ut vitae feugiat purus.
              Aliquam erat volutpat. Proin non ligula nec sapien bibendum interdum.
              Aenean nec felis vel felis blandit aliquet a eu elit. Duis convallis justo in est vestibulum convallis.
              Etiam vehicula lectus sit amet lacus malesuada, et porta magna dapibus.
            </Typography>
            <br />
            <Typography variant='body2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus vestibulum, nulla non ultrices consequat, urna nulla posuere lacus, at lacinia ligula sapien nec quam.
              Integer facilisis, sapien vel dignissim vestibulum, justo purus interdum augue, non scelerisque magna orci non augue.
              Vestibulum at malesuada lectus. Suspendisse potenti.
              Quisque faucibus, erat id aliquam facilisis, ligula felis tempus eros, in ultrices lacus nisi et elit.
              Praesent venenatis nisi quis dui laoreet tristique.
              Pellentesque in tortor nec velit gravida sodales non nec magna. Ut vitae feugiat purus.
              Aliquam erat volutpat. Proin non ligula nec sapien bibendum interdum.
              Aenean nec felis vel felis blandit aliquet a eu elit. Duis convallis justo in est vestibulum convallis.
              Etiam vehicula lectus sit amet lacus malesuada, et porta magna dapibus.
            </Typography>
          </Box>

          <DonationHistory />
        </Grid2>

        <Grid2
          size={{ xs: 4 }}
          sx={{ pl: 3, pr: 3, mb: 2 }}
        >
          <Typography variant='body2' sx={{ mb: 0 }}>
            Cost estimation
          </Typography>
          <Typography variant='body2' sx={{ mb: 2 }}>
            <span style={{ fontWeight: 'bold' }}>12,000 LKR</span> (5,000 LKR received)
          </Typography>

          <Typography variant='body2' sx={{ mb: 0 }}>
            Status
          </Typography>
          <Typography variant='body2' sx={{ mb: 2, fontWeight: 'bold' }}>
            PENDING
          </Typography>

          <Button
            sx={{ mb: 4 }}
            fullWidth
            variant='contained'
            onClick={onDonateClick}
          >
            Donate
          </Button>

          <Typography variant='body2' sx={{ mb: 1 }}>
            Requested by
          </Typography>

          <Card>
            <CardHeader
              avatar={<Avatar {...stringAvatar('John Doe', 32)} />}
              title='John Doe'
              subheader="Principle"
            />
            <CardContent>
              <Typography variant='body1'>
                Location
              </Typography>
              <Typography variant='body2'>
                Weligame, Southern Province
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <DonationDialog openDialog={openDonationDialog} onClose={onDonationDialogClose}/>
    </>
  );
};

export default ViewRequest;