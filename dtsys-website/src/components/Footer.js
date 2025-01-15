// src/components/Footer.js

import React from 'react';
import { Box, Typography, Grid, Link, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#0b1436',
    color: '#FFFFFF',
    padding: theme.spacing(6, 2),
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    display: 'block',
    marginBottom: theme.spacing(1),
  },
  newsletter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  emailField: {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    marginBottom: theme.spacing(1),
  },
  button: {
    backgroundColor: '#FFFFFF',
    color: '#000080',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
    fontWeight: 'bold',
    textTransform: 'none',
  },
  socialIcons: {
    '& > *': {
      marginRight: theme.spacing(2),
      color: '#FFFFFF',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            DTSYS
          </Typography>
          <Typography variant="body2">
            03-6211 3678<br />
            <a href="mailto:info@dtsys.tech" style={{ color: '#FFFFFF', textDecoration: 'none' }}>info@dtsys.tech</a><br />
            No. B-5-13, Gateway Corporate Suites,<br />
            Mont Kiara, 50480 Kuala Lumpur,<br />
            Wilayah Persekutuan Malaysia
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="#" className={classes.link}>Solutions</Link>
          <Link href="#" className={classes.link}>Services</Link>
          <Link href="#" className={classes.link}>About Us</Link>
          <Link href="#" className={classes.link}>Blog</Link>
          <Link href="#" className={classes.link}>Submit</Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <Box className={classes.newsletter}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Email *"
              className={classes.emailField}
              InputProps={{ style: { padding: '10px' } }}
            />
            <Button variant="contained" className={classes.button}>
              Get Started
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us On:
          </Typography>
          <Box className={classes.socialIcons}>
            <a href="#" aria-label="LinkedIn">
              <img src="../images/linkedin.png" alt="LinkedIn" height="30" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="../images/facebook.png" alt="Facebook" height="30" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="../images/twitter.png" alt="Twitter" height="30" />
            </a>
          </Box>
        </Grid>
      </Grid>
      <Box textAlign="center" marginTop={4}>
        <Typography variant="body2">
          ©2024 by DTSYS. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
