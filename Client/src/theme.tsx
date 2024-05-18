import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(255,23,68,0.90)',
    },
    secondary: {
      main: '#78909c',
    },
    background: {
      default: '#f4f3f1',
    },
  },
  typography: {
    fontFamily: '"Albert Sans"',
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem',
      lineHeight: '1.05'
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
