import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 6 },
        pb: { xs: 8, sm: 8 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column'},
          justifyContent: 'center',
          alignItems: 'left',
          gap: {xs: 4, sm: 4},
          px: {xs: 8},
          pt: { xs: 6 },
          pb: { xs: 6 }
        }}
      >
        <Typography sx={{ textAlign: {xs: 'left', sm: 'center'}}} variant="h1" color="text.primary">
          About
        </Typography>
        <Typography variant="h5" sx={{ textAlign: {xs: 'left', sm: 'center'}}} color="text.primary">
          London Pattern Club was established in April 2023 with the aim of exploring algorithmic creative practices – such as live-coding and hand-weaving – through talks and workshops.
        </Typography>
        <Typography variant="h5" sx={{ textAlign: {xs: 'left', sm: 'center'}}} color="text.primary">
          We currently hold a monthly craft group at the Ivy House, Nunhead. Here, we explore algorithmic craft practices, such as braiding, weaving, knitting and crochet, as well as digital design and fabrication.
        </Typography>
      </Container>
    </Box>
  );
}
