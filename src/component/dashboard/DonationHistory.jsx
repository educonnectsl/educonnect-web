import { Box, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import { COLORS } from '../../util/Constant';
import ButtonBase from '@mui/material/ButtonBase';

const donationHistory = [
  { id: 1, amount: 1000, date: '25 Jan 2025', user: { id: 1, firstName: "John", lastName: "Doe" } },
  { id: 2, amount: 500, date: '10 Jun 2024', user: { id: 2, firstName: "Jane", lastName: "Smith" } },
  { id: 3, amount: 200, date: '02 Aug 2025', user: { id: 3, firstName: "Alice", lastName: "Johnson" } },
]

const DonationHistory = () => {

  

  return (
    <>
      {!donationHistory.length ? (
        <Typography variant="body2">
          No donation recorded for this request yet
        </Typography>
      ) : (
        <>
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Donation History
          </Typography>
          {donationHistory.map((donation) => (
            <ButtonBase
              key={donation.id}
              onClick={() => console.log(`Donation #${donation.id} clicked`)}
              sx={{ display: 'block', width: '100%', borderRadius: 2, overflow: 'hidden', mb: 1 }}
            >
              <Grid2 container spacing={2} sx={{ p: 1, backgroundColor: COLORS.LIGHT_PURPLE }}>
                <Grid2 size={{ xs: 4 }} sx={{ px: 2, textAlign: 'left', fontWeight: 'bold' }}>
                  <Typography variant="body2">
                    {donation.user.firstName} {donation.user.lastName}
                  </Typography>
                </Grid2>
                <Grid2 size={{ xs: 4 }}>
                  <Typography variant="body2">{donation.amount} LKR</Typography>
                </Grid2>
                <Grid2 size={{ xs: 4 }} sx={{ textAlign: 'right', px: 2 }}>
                  <Typography variant="body2">{donation.date}</Typography>
                </Grid2>
              </Grid2>
            </ButtonBase>
          ))}
        </>
      )}
    </>
  );
};

export default DonationHistory;