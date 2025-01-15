// src/components/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import logo from '../images/Logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#0b1436', // Dark Blue
  },
  logo: {
    height: '40px',
    marginRight: theme.spacing(2),
  },
  navLinks: {
    marginLeft: 'auto',
    display: 'flex',
    gap: theme.spacing(3),
  },
  navButton: {
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  // Scroll helper function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="DTSYS Logo" className={classes.logo} />
        </Box>
        <Box className={classes.navLinks}>
          <Button className={classes.navButton} onClick={() => scrollToSection('hero')}>Home</Button>
          <Button className={classes.navButton} onClick={() => scrollToSection('services')}>Services</Button>
          <Button className={classes.navButton} onClick={() => scrollToSection('solutions')}>Solutions</Button>
          <Button className={classes.navButton} onClick={() => scrollToSection('partners')}>Partners</Button>
          <Button className={classes.navButton} onClick={() => scrollToSection('contact')}>Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
