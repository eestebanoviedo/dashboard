import React from 'react';

// Material UI
import {Typography} from '@material-ui/core';

const Copyright=()=>{

    return(
        <Typography variant="body2" color="textSecondary" align="center">
        {"ECO Autoparts SA © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );

}

export default Copyright;


