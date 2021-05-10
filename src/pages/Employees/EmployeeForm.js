import { Grid } from '@material-ui/core';
import React from 'react';
import { Form, UseForm } from '../../components/UseForm';
import Controls from '../../components/controls/Controls';
import * as employeeService from '../../services/employeeService';

// create an object for each radio button in the group
const genderItems = [
  { id: 'she', title: 'She/Her' },
  { id: 'he', title: 'He/Him' },
  { id: 'they', title: 'They/Them' },
  { id: 'other', title: 'Other' },
];

// initialize values to use in state
const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  pronouns: '',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  // pass defined variables into state

  const { values, handleInputChange } = UseForm(initialFValues);

  // this callback func will execute when the variable changes

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            variant='outlined'
            label='Email'
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='pronouns'
            label='Pronouns'
            value={values.pronouns}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.Checkbox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
