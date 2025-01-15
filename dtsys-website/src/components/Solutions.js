// src/components/Solutions.js

import React from 'react';
import { Grid, Typography, Card, CardContent, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ChillerIcon from '@mui/icons-material/AcUnit'; // Example icon
import ITIcon from '@mui/icons-material/Computer';

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: theme.spacing(8),
  },
  card: {
    backgroundColor: '#1a1a1a',
    color: '#FFFFFF',
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
}));

const Solutions = () => {
  const classes = useStyles();

  const solutions = [
    {
      icon: <ChillerIcon className={classes.icon} />,
      title: 'Chiller Optimization Software',
      description: 'Optimize energy usage with advanced chiller management solutions.',
      link: '#',
    },
    {
      icon: <ITIcon className={classes.icon} />,
      title: 'Customized IT Solutions',
      description: 'Tailored IT services to meet your unique business requirements.',
      link: '#',
    },
  ];

  return (
    <Box className={classes.section} id="solutions">
      <Typography variant="h4" align="center" gutterBottom>
        Our Solutions
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Explore our comprehensive range of solutions designed to meet your business needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card} elevation={3}>
              {solution.icon}
              <Typography variant="h6" className={classes.title}>
                {solution.title}
              </Typography>
              <Typography variant="body1" className={classes.description}>
                {solution.description}
              </Typography>
              <Button variant="contained" className={classes.button} href={solution.link}>
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
