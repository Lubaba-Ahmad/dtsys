// src/components/Partners.js

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SquareCloudLogo from '../images/SquareCloud.png'; // Ensure you have this image

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
  },
  partnershipCard: {
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
    borderRadius: '10px',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  partnershipTitle: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  partnershipDescription: {
    marginBottom: theme.spacing(2),
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
  partnerLogo: {
    height: '60px',
    margin: theme.spacing(2),
  },
}));

const Partners = () => {
  const classes = useStyles();

  const otherPartners = [
    { name: 'JohorPort', logo: 'JohorPort.png' },
    { name: 'L4Airports', logo: 'L4Airports.png' },
    { name: 'Genting Berhad', logo: 'GentingBerhad.png' },
    // Add more partners as needed
  ];

  return (
    <Box className={classes.section} id="partners">
      <Typography variant="h4" align="center" gutterBottom>
        Our Trusted Partners
      </Typography>
      <Box className={classes.partnershipCard}>
        <Typography variant="h5" className={classes.partnershipTitle}>
          Revolutionizing Chiller Optimization with SquareCloud's MaximizeEE Technology
        </Typography>
        <Typography variant="body1" className={classes.partnershipDescription}>
          We’re excited to announce our strategic partnership with SquareCloud, a leader in cloud technology and infrastructure solutions. Together, we are delivering cutting-edge, scalable cloud services that optimize performance, reduce costs, and enhance digital experiences for our clients.
        </Typography>
        <Button variant="contained" className={classes.button}>
          Learn More About MaximizeEE
        </Button>
      </Box>
      <Typography variant="h5" align="center" gutterBottom style={{ marginTop: '40px' }}>
        Our Valued Partners
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={3} md={2}>
          <img src={SquareCloudLogo} alt="SquareCloud" className={classes.partnerLogo} />
        </Grid>
        {/* Map other partners */}
        {otherPartners.map((partner, index) => (
          <Grid item xs={6} sm={3} md={2} key={index}>
            <img src={`../images/${partner.logo}`} alt={partner.name} className={classes.partnerLogo} />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" marginTop={4}>
        <Button variant="contained" className={classes.button}>
          View All Partners
        </Button>
      </Box>
    </Box>
  );
};

export default Partners;
