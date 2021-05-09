import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { UseForm, Form } from '../../components/UseForm';

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

  const { values, setValues, handleInputChange } = UseForm(initialFValues);

  // this callback func will execute when the variable changes

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Full Name'
            name='fullName'
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField variant='outlined' label='Email' value={values.email} />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
