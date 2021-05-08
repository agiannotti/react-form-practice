import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from '@material-ui/core';
import { ChatBubbleOutline } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  //use root to target entire component
  root: {
    backgroundColor: '#fff',
  },
  searchInput: {
    opacity: '0.4',
    padding: '0px 8px',
    fontSize: '0.8rem',
    borderRadius: '18px',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': { marginRight: '8px' },
  },
  btnRoot: {
    backgroundColor: 'green',
  },
  btnLabel: { backgroundColor: 'red' },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase
              className={classes.searchInput}
              placeholder='Search topics'
              startAdornment={<SearchIcon fontSize='small' />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton
              // Targeting root and label classes within Mui elements, check MUI API and dev tools for element root parent child etc
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            >
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color='primary'>
                <ChatBubbleOutline fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
