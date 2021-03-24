import React from "react";

import { Hidden, makeStyles } from "@material-ui/core";
// import NavBar from "./NavBar";
// import NavBarSearch from "./NavBarSearch";
import Navegation from "./Navegation.jsx";

// import DrawerRightMio from "./DrawerRightMio";

import Cajon from "./CajonSideBar";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Contenedor = () => {
  const classes = useStyles();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    // SetAbrir va a pasar a lo distino de Abrir
    //Si el segundo hidden esta en falso al abrir pasa a verdadero
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>
      {/* <Hidden smUp> */}
      <Navegation
        accionAbrir={accionAbrir}
        onClick={accionAbrir}
        onClose={accionAbrir}
      />
      {/* </Hidden> */}

      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      {/* Hidden del boton izquierdo */}
      <Hidden smUp>
        {/* funcion onClose pasa a traves de props a su cajonSideBar */}
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>

      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        Contenido
        {/* <DrawerRightMio /> */}
      </div>
    </div>
  );
};

export default Contenedor;
