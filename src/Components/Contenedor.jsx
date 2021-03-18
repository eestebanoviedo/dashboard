import React from "react";

import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import Cajon from "./Cajon";
import Navegation   from './Navegation';
import { black } from "material-ui/styles/colors";
import Nav1 from './nav1'

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
      {/* <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden> */}
    </div>
  );
};

export default Contenedor;
