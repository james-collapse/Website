import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 80;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const themeColors = useTheme();
  const rgbColor = themeColors.palette.primary.light;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 0
        }}
      >
        <Container disableGutters maxWidth={false}>
          <Toolbar
            variant="regular"
            sx={(_) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '0px',
              bgcolor: rgbColor,
              backdropFilter: 'invert(70%)',
              maxHeight: 40,
              border: '0px',
              borderColor: 'divider'
            })}
          >
            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                alignItems: 'center',
                ml: '-12px',
                px: 2,
              }}
            >
              <Typography variant="body1" color="text.primary" fontWeight={700}>
                    London Pattern Club
                  </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-12px',
                px: 4,
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('about')}
                  sx={{ px: '12px' }}
                >
                  <Typography variant="body1" color="text.primary">
                    About
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('events')}
                  sx={{ px: '12px' }}
                >
                  <Typography variant="body1" color="text.primary">
                    Events
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box sx={{ display: { xs: '', sm: 'none' } }}>
              <Button
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon htmlColor='#1E1E1E' />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Grid container flexDirection={'column'}>
                    <Grid item>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'end',
                          flexGrow: 1,
                        }}
                      >
                      </Box>
                      <MenuItem onClick={() => scrollToSection('about')}>
                        About
                      </MenuItem>
                      <MenuItem onClick={() => scrollToSection('events')}>
                        Events
                      </MenuItem>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
