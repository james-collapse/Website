import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

type Event = {
  name: string,
  location: string,
  date: string
}

function Event({name, location, date} : Event) {
  return (
    <Grid container
      direction={{xs: 'column'}}
      spacing={2}
      justifyContent={{xs: 'center'}}
      alignItems={{xs: 'center'}}
      >
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="left" color="#D9D9D9">
          {date}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="left" color="#D9D9D9" fontWeight='bold'>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="left" color="#D9D9D9">
          {location}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' color="primary">Tickets</Button>
      </Grid>
    </Grid>
  )
}

export default function Events() {
  const [events, setEvents] = useState(new Array<Event>())

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  };

  const renderEvents = events.map(e =>
    <Event name = {e.name} location = {e.location} date = {e.date} />);

  return (
    <Box
      id="events"
      sx={{
        px: {xs: 8},
        pt: { xs: 6 },
        pb: { xs: 12 },
      }}
      bgcolor="#1E1E1E"
    >
      <Typography variant="h1" textAlign="center" color="#D9D9D9">
        Events
      </Typography>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column'},
          justifyContent: 'center',
          alignItems: 'center',
          pt: {xs: 8},
          gap: {xs: 8, sm: 6, md: 6}
        }}
      >
        {renderEvents}
      </Container>
    </Box>
  );
}
