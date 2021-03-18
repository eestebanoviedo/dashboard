import React from 'react';

// Material UI

import {TextField} from '@material-ui/core'
// import {Visibility, VisibilityOff, IconButton, InputAdornment} from '@material-ui/icons/Visibility';
// import useState from 'react';



  // Props = props.valor + Pass

const InputPass =(props)=>{
  // const [showPassword, setShowPassword] = useState();
  // const handleClickShowPassword = () => setShowPassword(!showPassword);
  // const handleMouseDownPassword = () => setShowPassword(!showPassword);

    return(
        <TextField
          fullWidth
         variant="outlined"
         autoComplete="current-password"
         {...props}
        //  type={showPassword ? "text" : "password"}
        //  InputProps={{
        //    endAdornment: (
        //      <InputAdornment position="end">
        //        <IconButton
        //          aria-label="toggle password visibility"
        //          onClick={handleClickShowPassword}
        //          onMouseDown={handleMouseDownPassword}
        //        >
        //          {showPassword ? <Visibility /> : <VisibilityOff />}
        //        </IconButton>
        //      </InputAdornment>
        //    ),
        //  }}
       />
    )   
}

export default InputPass;