// src/components/ContactUs.js

import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
    padding: theme.spacing(4),
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
    borderRadius: '10px',
  },
  formField: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#000080',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#0000CD',
    },
    fontWeight: 'bold',
    textTransform: 'none',
  },
  contactDetails: {
    marginTop: theme.spacing(4),
  },
  socialIcons: {
    marginTop: theme.spacing(2),
    '& > *': {
      marginRight: theme.spacing(2),
      color: '#FFFFFF',
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.section} id="contact">
      <Typography variant="h4" align="center" gutterBottom>
        Empower Your Business with DTSYS
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        At DTSYS, we are committed to helping businesses leverage the power of technology to achieve their goals. Contact us today to learn how we can help you take your business to the next level.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            className={classes.formField}
            InputProps={{ style: { backgroundColor: '#FFFFFF' } }}
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            className={classes.formField}
            InputProps={{ style: { backgroundColor: '#FFFFFF' } }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            className={classes.formField}
            InputProps={{ style: { backgroundColor: '#FFFFFF' } }}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            className={classes.formField}
            InputProps={{ style: { backgroundColor: '#FFFFFF' } }}
          />
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            className={classes.formField}
            InputProps={{ style: { backgroundColor: '#FFFFFF' } }}
          />
          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            className={classes.formField}
            InputProps={{ style: { backgroundColor: '#FFFFFF' } }}
          />
          <Box textAlign="center">
            <Button variant="contained" className={classes.button}>
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.contactDetails}>
          <Typography variant="h6" gutterBottom>
            Contact Details
          </Typography>
          <Typography variant="body1">
            Phone: <a href="tel:0362113678" style={{ color: '#FFFFFF', textDecoration: 'none' }}>03-6211 3678</a>
          </Typography>
          <Typography variant="body1">
            Email: <a href="mailto:info@dtsys.tech" style={{ color: '#FFFFFF', textDecoration: 'none' }}>info@dtsys.tech</a>
          </Typography>
          <Typography variant="body1">
            Address: No. B-5-13, Gateway Corporate Suites, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan, Malaysia
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
    </Box>
  );
};

export default ContactUs;
