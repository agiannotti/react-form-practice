import './App.css';

import { makeStyles, CssBaseline } from '@material-ui/core';

import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <CssBaseline />
      </div>
    </>
  );
};

export default App;
