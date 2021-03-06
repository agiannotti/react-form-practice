import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = {
  sideMenu: {
    backgroundColor: '#253053',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}></div>;
};

export default withStyles(style)(SideMenu);
