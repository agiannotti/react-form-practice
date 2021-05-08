import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
}));

const PageHeader = (props) => {
  const classes = useStyles();
  const { title, icon, subTitle } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div>
        <Card>{icon}</Card>
      </div>
      <div>
        <Typography variant='h6' component='div'>
          {title}
        </Typography>
        <Typography variant='subtitle2' component='div'>
          {subTitle}
        </Typography>
      </div>
    </Paper>
  );
};

export default PageHeader;
