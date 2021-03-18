import React from 'react';
import {Link} from 'react-router-dom';

const LinkBtn =(props)=>{

    return (
        <Link {...props} variant="body2" >
            {props.txt}    
        </Link>
    )
}

export default LinkBtn;