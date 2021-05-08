import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

// withStyles & makeStyles
// react JSS
const useStyles = makeStyles({
  sideMenu: {
    backgroundColor: '#253053',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
  },
});

const SideMenu = () => {
  const classes = useStyles();

  return <div className={classes.sideMenu}>asdasd</div>;
};

export default SideMenu;
