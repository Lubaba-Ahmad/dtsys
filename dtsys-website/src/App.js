// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import KeyServices from './components/KeyServices';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0b1436', // Dark Blue
    },
    secondary: {
      main: '#FFFFFF', // White
    },
    background: {
      default: '#000000', // Black
    },
    text: {
      primary: '#FFFFFF', // White
      secondary: '#000000', // Black
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 400,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Container maxWidth="lg" style={{ padding: '40px 0' }}>
        <div id="services">
          <KeyServices />
        </div>
        <div id="solutions">
          <Solutions />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
