import React from "react";

import { Hidden, makeStyles } from "@material-ui/core";
import Cajon from "./Cajon";
import Navegation   from './Navegation';
import { black } from "material-ui/styles/colors";
import DrawerBox from './Drawer';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    border: "4px solid black",
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
    },
  },
  drawerBox:{
    maxWidth: drawerWidth,
    flexShrink: 0,

  }
  // necessary for content to be below app bar
}));

const Contenedor = () => {
  const classes = useStyles();
  
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>

        {/* <Navegation className={classes.appBar}/> */}
        <Navegation/>
        <Hidden>
        <DrawerBox variant="permanent" open={false} anchor="right" />
        </Hidden>
        <Hidden smUp>
        <DrawerBox variant="temporary" open={abrir} onClose={accionAbrir}  anchor="right"/>
        </Hidden>
      {/* <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden> */}
    </div>
  );
};

export default Contenedor;
