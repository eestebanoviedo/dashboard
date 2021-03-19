import React from "react";
import { makeStyles, Drawer } from "@material-ui/core";
import SideBar from "./Sidebar.js";

// const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  drawer: {
    width: 239,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    // border: "1px solid red;",
    // height: "80vh",
    // top: "20px",
    border: "none",
    overflow: "hidden",
    // borderRadius: "40px",
    // borderRadius: "20px",
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
      {/* <div className={classes.toolbar}></div> */}
      <SideBar />
    </Drawer>
  );
};

export default Cajon;
