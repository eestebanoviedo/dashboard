import React from "react";
import { makeStyles, Drawer } from "@material-ui/core";
import Listas from "./listItems";

// const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

const Cajon = (props) => {
  const classes = useStyle();
  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}></div>
      <Listas />
    </Drawer>
  );
};

export default Cajon;
