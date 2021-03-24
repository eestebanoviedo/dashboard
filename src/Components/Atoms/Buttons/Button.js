import React from "react";

import { Button } from "@material-ui/core";

const Btn = (props) => {
  return (
    <Button fullWidth variant="contained" color="primary" {...props}>
      {props.txt}
    </Button>
  );
};

export default Btn;
