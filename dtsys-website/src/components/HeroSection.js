// src/components/HeroSection.js

import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import heroVideo from '../images/Hero.mp4';
import CountUp from 'react-countup'; // For animated statistics

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    position: 'relative',
    height: '100vh',
    color: '#FFFFFF',
    overflow: 'hidden',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
    opacity: 0.7,
  },
  contentBox: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      maxWidth: '90%',
      margin: '0 auto',
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  description: {
    marginBottom: theme.spacing(4),
    fontSize: '1.2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  buttonGroup: {
    display: 'flex',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  button: {
    backgroundColor: '#FFFFFF',
    color: '#000080', // Dark Blue text
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
    fontWeight: 'bold',
    textTransform: 'none',
    padding: theme.spacing(1.5, 4),
  },
  statsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: theme.spacing(2, 0),
  },
  statItem: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: '1rem',
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  // Scroll helper functions
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="hero" className={classes.heroContainer}>
      <video autoPlay loop muted className={classes.videoBackground}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className={classes.contentBox}>
        <Typography variant="h2" className={classes.title}>
          Brilliant Talent & Pioneering Technology Solutions
        </Typography>
        <Typography variant="h6" className={classes.description}>
          Innovative Technology. Brilliant Talent. Seamless Experiences.
        </Typography>
        <Box className={classes.buttonGroup}>
          <Button variant="contained" className={classes.button} onClick={scrollToServices}>
            Learn More
          </Button>
          <Button variant="contained" className={classes.button} onClick={scrollToContact}>
            Get Started
          </Button>
        </Box>
      </Container>
      <Box className={classes.statsContainer}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item xs={6} sm={2} className={classes.statItem}>
            <Typography className={classes.statNumber}>
              <CountUp end={20} duration={2} />+ Years of Experience
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classes.statItem}>
            <Typography className={classes.statNumber}>
              <CountUp end={50} duration={2} />+ Business Partners
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classes.statItem}>
            <Typography className={classes.statNumber}>
              <CountUp end={100} duration={2} />+ Projects Completed
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classes.statItem}>
            <Typography className={classes.statNumber}>
              <CountUp end={3} duration={2} />+ Countries Served
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classes.statItem}>
            <Typography className={classes.statNumber}>
              <CountUp end={13} duration={2} /> Locations Nationwide
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
