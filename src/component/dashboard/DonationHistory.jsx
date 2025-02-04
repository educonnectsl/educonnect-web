import { Avatar, Grid2, Typography } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import React from 'react';
import { COLORS } from '../../util/Constant';
import { stringAvatar } from '../../util/Utils';

const donationHistory = [
  { id: 1, title: 'Water Pump Installation', amount: 1000, date: '25 Jan 2025', user: { id: 1, firstName: "John", lastName: "Doe" } },
  { id: 2, title: 'School Supplies', amount: 500, date: '10 Jun 2024', user: { id: 2, firstName: "Jane", lastName: "Smith" } },
  { id: 3, title: 'Library Books and shoes for grade 5 students', amount: 200, date: '02 Aug 2025', user: { id: 3, firstName: "Alice", lastName: "Johnson" } },
]

const DonationHistory = ({ onEntryClick }) => {

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
              onClick={onEntryClick}
              sx={{ display: 'block', width: '100%', borderRadius: 1, border: '1px solid', borderColor: COLORS.PRIMARY, overflow: 'hidden', mb: 1 }}
            >
              <Grid2 container spacing={2} sx={{ p: 1 }}>
                <Grid2 size={{ xs: 9 }} sx={{ px: 1, textAlign: 'left', fontWeight: 'bold' }}>
                  <Typography variant="body2">
                    {donation.title}
                  </Typography>
                </Grid2>
                <Grid2 size={{ xs: 1, textAlign: 'right' }}>
                  <Avatar {...stringAvatar(`${donation.user.firstName} ${donation.user.lastName}`, 18)} />
                </Grid2>
                <Grid2 size={{ xs: 2 }} sx={{ textAlign: 'right', px: 2 }}>
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