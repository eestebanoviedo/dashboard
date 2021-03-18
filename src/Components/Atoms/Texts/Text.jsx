import React from 'react';

// Material UI
import {Typography} from '@material-ui/core';

// Default prps {
//   aling="center" variant="boby1" 
// Test
// } 

const Text =(props)=>{

    return(
        <Typography variant="body1" align="center">
          {props.txt}
      </Typography>
    )
}

export default Text;

