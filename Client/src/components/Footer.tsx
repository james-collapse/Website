import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Copyright() {
  return (
    <Typography variant="body2" color="text.primary" mt={1}>
      {'Copyright © '}
      <Link href="https://mui.com/">James Walker</Link>
      {' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 2, sm: 4 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Grid container
        sx={{
          width: {xs: "6"},
          justifyContent: 'space-between',
        }}
      >
        <Grid item>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
}
