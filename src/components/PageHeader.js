import React from 'react';
import { Paper, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fdfdff',
    display: 'flex',
    flexDirection: 'row',
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    padding: theme.spacing(2),
    color: '#3c44b1',
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(5),
  },
  pageDesc: {
    paddingLeft: theme.spacing(4),
    opacity: '0.6',
  },
}));

const PageHeader = (props) => {
  const classes = useStyles();
  const { title, icon, subTitle } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
      </div>
      <div>
        <Typography variant='h6' component='div' className={classes.pageTitle}>
          {title}
        </Typography>
        <Typography
          variant='subtitle2'
          component='div'
          className={classes.pageDesc}
        >
          {subTitle}
        </Typography>
      </div>
    </Paper>
  );
};

export default PageHeader;
