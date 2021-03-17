import React from "react";

import { Hidden, makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
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
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>
      {/* <Hidden smUp> */}
      <NavBar accionAbrir={accionAbrir} />
      {/* </Hidden> */}

      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        Contenido
      </div>
    </div>
  );
};

export default Contenedor;
