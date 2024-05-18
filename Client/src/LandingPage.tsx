import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import About from './components/About';
import MailingList from './components/MailingList';

export default function LandingPage() {
  const theme = useTheme();

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <AppAppBar  />
          <Box>
            <Hero />
            <About />
            <Events />
            <MailingList />
            <Footer />
          </Box>
      </ThemeProvider>
  );
}
