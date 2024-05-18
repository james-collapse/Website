import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%'
      })}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column'},
          justifyContent: 'center',
          alignItems: 'center',
          gap: {xs: 12, sm: 6},
          px: {xs: 8},
          pt: { xs: 12 },
          pb: { xs: 12 },
        }}
      >
        <Typography variant="h1" textAlign="center" color="text.primary">
          We are a craft group and a community of pattern-based makers.
        </Typography>
        <Box width={200} height={200} bgcolor='#1E1E1E'></Box>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column'},
          justifyContent: 'center',
          alignItems: 'center',
          gap: {xs: 12, sm: 6},
          px: {xs: 8},
          pt: { xs: 12 },
          pb: { xs: 12 },
          bgcolor: '#1E1E1E'
        }}
      >
        <Box width={200} height={200} bgcolor='#D9D9D9'></Box>
        <Typography variant="h1" textAlign="center" color="#D9D9D9">
          We explore patterns in textiles, crafts, algorithmic art, and live coding.
        </Typography>
      </Container>
    </Box>
  );
}
