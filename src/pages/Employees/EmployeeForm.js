import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

// initialize values to use in state
const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  // pass defined variables into state
  const [values, setValues] = useState(initialFValues);
  const classes = useStyles();

  // this callback func will execute when the variable changes

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Full Name'
            value={values.fullName}
          />
          <TextField variant='outlined' label='Email' value={values.email} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
