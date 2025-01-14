// src/components/KeyServices.js

import React from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PeopleIcon from '@mui/icons-material/People';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: '#1a1a1a', // Darker background for cards
    color: '#43abc1',
    borderRadius: '10px',
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: '1rem',
  },
}));

const KeyServices = () => {
  const classes = useStyles();

  const services = [
    {
      icon: <PeopleIcon className={classes.icon} />,
      title: 'Talent',
      description: 'Providing the expertise needed to address your technology challenges through a highly skilled workforce.',
    },
    {
      icon: <BuildIcon className={classes.icon} />,
      title: 'Critical Infrastructure',
      description: 'Building strong foundations for economic growth, enhancing services like transportation, energy, and communication.',
    },
    {
      icon: <SecurityIcon className={classes.icon} />,
      title: 'Cyber Security',
      description: 'Safeguarding operations with robust measures to prevent data breaches and financial losses.',
    },
    {
      icon: <CodeIcon className={classes.icon} />,
      title: 'Software',
      description: 'Delivering secure, enterprise-grade solutions trusted by businesses worldwide.',
    },
  ];

  return (
    <Box className={classes.section}>
      <Typography variant="h4" align="center" gutterBottom>
        Empowering Business With Technology
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        At DTSYS, we empower businesses through innovative solutions tailored to your unique needs. From cloud analytics modernization to enhancing application versatility and chiller optimization, our experts deliver strategies that drive growth and unlock your full potential in the digital landscape.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={classes.card} elevation={3}>
              {service.icon}
              <Typography variant="h6" className={classes.title}>
                {service.title}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                {service.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyServices;
