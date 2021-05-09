import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export const UseForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props) => {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
};

// if you choose to not have an export default because you want
// multiple exports, you can import with curly braces from target import
