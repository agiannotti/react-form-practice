import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@material-ui/core";
import { RadioGroup as MuiRadioGroup } from "@material-ui/core";
import React from "react";

const RadioGroup = (props) => {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup name={name} value={value} onChange={onChange}>
        {items.map((item, index) => (
          <FormControlLabel
            key={index}
            label={item.title}
            value={item.id}
            control={<Radio />}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
