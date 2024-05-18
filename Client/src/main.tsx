import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css';
import App from './App.tsx'
import theme from './theme.tsx'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
