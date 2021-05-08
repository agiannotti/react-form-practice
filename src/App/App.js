import './App.css';

import { makeStyles } from '@material-ui/core';

import SideMenu from '../components/SideMenu';

const useStyles = makeStyles({
  appMain: {
    width: '100%',
    paddingLeft: '320px',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>Looking Good!</div>
    </>
  );
};

export default App;
