import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';

const CheckBox = (props) => {
  const { name, label, value, onChange } = props;

  // we need to convert the information we are passing to the handleInputChange for checkboxes
  // convert to default event parameter function
  // this function will return an object target of a name and value
  const convertToDefEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color='primary'
            checked={value}
            //
            onChange={(e) =>
              onChange(convertToDefEventParam(name, e.target.checked))
            }
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
};

export default CheckBox;
