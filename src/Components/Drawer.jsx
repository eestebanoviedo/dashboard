
import React from 'react';

import { Drawer, Avatar, makeStyles} from '@material-ui/core';
import Text from './Atoms/Texts/Text';
import Input from './Atoms/Inputs/Input';
import Btn from './Atoms/Buttons/Button';


const useStyles = makeStyles((theme) =>({

    drawerPerfil: {
        width:"400px",
        height: "auto",
    },

    avatarPerfil:{
        marginTop: "50px",
        width: "auto",
        heigth: "auto",
    
    },
    large: {
        width: "100px",
        height: "100px",
        marginLeft: "160px",
        marginBottom:"20px",
        
      },
    divInputsDisabled: {
        width: "400px",
        marginTop: "50px",
        alignItems: "center",
        textAlign: "center",
        marginLeft: "10px"
    },
    inputDisabled: {
        width:"350px",
        alignItems: "center",
    },
    textPerfil: {

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight:" bold",
    },
    btnPerfil:{
        margin: theme.spacing(40,0,0,7),
        width: "316px",
        height: "36px",
        borderRadius: "4px",
        
    }

}));


const DrawerBox =(props)=>{

const classes = useStyles();

   return (
            <Drawer className={classes.drawerPerfil} {...props}>
                    <div className={classes.avatarPerfil}>
                    <Avatar className={classes.large}/>
                     <Text  className={classes.textPerfil} txt={"Gianfranco Depaoli Gampel"}
                     />
                    </div>
                    <div className={classes.divInputsDisabled}>
                    <Input className={classes.inputDisabled}
                    disabled
                    label={"Nombre de usuario"}
                    value="Gian Depaoli"
                    />
                    <Input 
                    // margin="dense"  
                    className={classes.inputDisabled}
                    disabled 
                    label={"Departamento"}
                    value="Sistema"
                    />
                     <Input disabled 
                     className={classes.inputDisabled}
                    label={"Ocupacion"}
                    value="Responsable"
                    /> <Input disabled 
                    className={classes.inputDisabled}
                    label={"Ubicacion"}
                    value="Rio Cuarto"
                    />
                    
                    </div> 
                    <Btn color="secondary" 
                    txt={"Cambiar contraseña"} 
                    className={classes.btnPerfil}
                    />
                    
            </Drawer>
   )


}

export default DrawerBox;


