import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import Label from "@material-ui/icons/Label";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import InfoIcon from "@material-ui/icons/Info";
import ForumIcon from "@material-ui/icons/Forum";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import HomeIcon from "@material-ui/icons/Home";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import logo from "./foto.png";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)",
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent",
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "#414141",
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    color: "#818181",
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    // height: 264,
    flexGrow: 1,
    width: "90%",
    background: "#C4C4C4",
    borderRadius: "20px",
    margin: "12px",
    
  },
  colorTexto: {
    color: "red",
  },
  logo: {
    height: "10vh",
    // textAlign: "center",
  },
  divLogo: {
    // height: "10vh",
    textAlign: "center",
  },
});

export default function GmailTreeView() {
  const classes = useStyles();

  return (
    <div>
      <TreeView
        className={classes.root}
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <div className={classes.divLogo}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <StyledTreeItem
          nodeId="1"
          labelText="Inicio"
          labelIcon={HomeIcon}
          bgColor="#019966"
        />
        <StyledTreeItem
          nodeId="2"
          labelText="Car"
          labelIcon={DriveEtaIcon}
          bgColor="#019966"
        />
        <StyledTreeItem
          nodeId="3"
          labelText="Planta"
          labelIcon={EmojiTransportationIcon}
          // color="#1a73e8"
            bgColor="#019966"
        >
          <StyledTreeItem
            nodeId="4"
            labelText="Social"
            labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            color="#1a73e8"
            bgColor="#019966"
          />
          <StyledTreeItem
            nodeId="5"
            labelText="Updates"
            labelIcon={InfoIcon}
            // labelInfo="2,294"
            color="#e3742f"
            bgColor="#019966"
          />
          <StyledTreeItem
            nodeId="6"
            labelText="Forums"
            labelIcon={ForumIcon}
            // labelInfo="3,566"
            color="#a250f5"
            bgColor="#019966"
          />
          <StyledTreeItem
            nodeId="7"
            labelText="Promotions"
            labelIcon={LocalOfferIcon}
            // labelInfo="733"
            color="#3c8039"
            bgColor="#019966"
          />
        </StyledTreeItem>
        <StyledTreeItem
          nodeId="8"
          labelText="Ventas"
          labelIcon={ShoppingCartIcon}
          bgColor="#019966"
        />
        <StyledTreeItem
          nodeId="9"
          labelText="Administracion"
          labelIcon={AttachMoneyIcon}
          bgColor="#019966"
        />
        <StyledTreeItem
          nodeId="10"
          labelText="Configuracion"
          labelIcon={SettingsIcon}
          bgColor="#019966"
        />
        <StyledTreeItem
          nodeId="11"
          labelText="ECOSOFT"
          labelIcon={LocalShippingIcon}
          bgColor="#019966"
        />
      </TreeView>
    </div>
  );
}

// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
// import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
// import MenuIcon from "@material-ui/icons/Menu";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme } from "@material-ui/core/styles";

// import Grid from "@material-ui/core/Grid";

// import logo from "./foto.png";
// import negro from "./negro.png";

// import GmailTreeView from "./navGoogle.js";

// import { mainListItems } from "./listItems";

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(93% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//     background: "#C4C4C4",
//     borderRadius: "20px",
//     margin: "12px",
//     height: "97%",
//     width: "280px",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   logo: {
//     height: "10vh",
//     // textAlign: "center",
//   },
//   divLogo: {
//     // height: "10vh",
//     textAlign: "center",
//   },
//   backgroundColor: {
//     background: "#C4C4C4",
//   },
// }));

// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <div className={classes.divLogo}>
//         <img src={logo} alt="Logo" className={classes.logo} />
//       </div>
//       {/* <div className={classes.toolbar} /> */}
//       <Divider />
//       <List style={{ color: "#818181" }}>{mainListItems}</List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Grid className={classes.root}>
//       <CssBaseline />
//       {/* NAV BAR */}
//       <Grid item xs={false} sm={4} md={5}>
//         <nav className={classes.drawer} aria-label="mailbox folders">
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Hidden smUp implementation="css">
//             <Drawer
//               container={container}
//               variant="temporary"
//               anchor={theme.direction === "rtl" ? "right" : "left"}
//               open={mobileOpen}
//               onClose={handleDrawerToggle}
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               ModalProps={{
//                 keepMounted: true, // Better open performance on mobile.
//               }}
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//           <Hidden xsDown implementation="css">
//             <Drawer
//               classes={{
//                 paper: classes.drawerPaper,
//               }}
//               variant="permanent"
//               open
//             >
//               {drawer}
//             </Drawer>
//           </Hidden>
//         </nav>
//       </Grid>
//       <Grid item xs={12} sm={8} md={7} square>
//         {/* <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               className={classes.menuButton}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap>
//               Responsive drawer
//             </Typography>
//           </Toolbar>
//         </AppBar> */}

//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography paragraph>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//             dolor purus non enim praesent elementum facilisis leo vel. Risus at
//             ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
//             rutrum quisque non tellus. Convallis convallis tellus id interdum
//             velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
//             sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//             integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//             eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//             quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//             vivamus at augue. At augue eget arcu dictum varius duis at
//             consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//             donec massa sapien faucibus et molestie ac.
//           </Typography>
//           <Typography paragraph>
//             Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//             ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//             elementum integer enim neque volutpat ac tincidunt. Ornare
//             suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
//             volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
//             Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
//             ornare massa eget egestas purus viverra accumsan in. In hendrerit
//             gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
//             aliquam sem et tortor. Habitant morbi tristique senectus et.
//             Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
//             euismod elementum nisi quis eleifend. Commodo viverra maecenas
//             accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
//             ultrices sagittis orci a.
//           </Typography>
//         </main>
//       </Grid>
//     </Grid>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default ResponsiveDrawer;
