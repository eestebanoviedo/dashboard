import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import logo from "./foto.png";
// import negro from "./negro.png";

import GmailTreeView from "./sidebar.js";
import SearchAppBar from "./navBar.js";

import Listas from "./Components/listItems.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  // drawer: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: drawerWidth,
  //     flexShrink: 0,
  //   },
  // },
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(93% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // drawerPaper: {
  //   width: drawerWidth,
  //   background: "#C4C4C4",
  //   borderRadius: "20px",
  //   margin: "12px",
  //   height: "97%",
  //   width: "280px",
  // },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  logo: {
    height: "10vh",
    // textAlign: "center",
  },
  divLogo: {
    // height: "10vh",
    textAlign: "center",
  },
  backgroundColor: {
    background: "#C4C4C4",
  },
  paper: {
    // margin: theme.spacing(8, 4),
    display: "flex",
    // flexDirection: 'column',
    //
    // alignItems: 'center',
  },
  // logo: {
  //   height: "10vh",
  //   // textAlign: "center",
  // },
  // divLogo: {
  //   // height: "10vh",
  //   textAlign: "center",
  // },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <div>
      <div className={classes.divLogo}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </div>
      {/* <div className={classes.toolbar} /> */}
      <Divider />
      <List style={{ color: "#818181" }}>{Listas}</List>
    </div>
  );

  return (
    <Grid container className={classes.root}>
      <div className={classes.paper}>
        <CssBaseline />
        {/* NAV BAR */}
        <Grid item xs={false} sm={4} md={2}>
          <GmailTreeView />
        </Grid>
        <Grid item xs={12} sm={8} md={10} square>
          {/* <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar> */}
          <SearchAppBar />

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </main>
        </Grid>
      </div>
    </Grid>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
