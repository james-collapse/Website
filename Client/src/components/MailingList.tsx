import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Fab, Grid, Stack, TextField } from '@mui/material';

export default function MailingList() {
  return (
    <Box
      id="mailing-list"
      sx={{
        px: {xs: 6},
        pt: { xs: 6 },
        pb: { xs: 6 },
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={{xs: 2, sm: 3}}>
        <Typography variant="h4" textAlign="center"  color="text.primary">
          Join our mailing list
        </Typography>
        <Grid container
          direction={{xs: "column", sm: "row"}}
          justifyContent="center"
          alignItems="center"
          rowSpacing={{xs: 3, sm: 0}}
          columnSpacing={{xs: 0, sm: 2}}
          >
          <Grid item xs={8} sm={6} lg={4}>
            <TextField
              fullWidth
              label="Email address"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Fab
              sx={{
                boxShadow: 'none',
                fontWeight: 'bold',
                fontSize: '105%',
                maxWidth: '100px'
              }}
              variant="extended"
              color="primary"
              size="large"
              >
              Sign up
            </Fab>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
