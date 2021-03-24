import React from "react";

import { TextField } from "@material-ui/core";

const Input = (props) => {
  return (
    <TextField
      //  className={classes.input}
      variant="outlined"
      margin="normal"
      fullWidth
      {...props}
      autoFocus
    />
  );
};

export default Input;
