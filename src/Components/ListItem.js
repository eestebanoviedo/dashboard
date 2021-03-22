import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import HomeIcon from "@material-ui/icons/Home";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import logo from "../foto.png";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    height: "100vh",
    flexGrow: 1,
    width: "100%",
    background: "#C4C4C4",
    // borderRadius: "15px",
    paddingTop: "35px",
  },
  logo: {
    height: "10vh",
    // textAlign: "center",
  },
  divLogo: {
    // height: "10vh",
    textAlign: "center",
  },
  // colorIcono: {
  //   color: "#818181",
  // },
  colorTexto: {
    color: "#414141",
    fontSize: "2px",
  },
  // colorFondo: {
  //   borderRadius: "15px",
  //   background: "",
  //   "&:hover": {
  //     background: "#3D996050",
  //   },
  // },
  listItemText: {
    fontSize: "15px", //Insert your required size
  },
  lista: {
    padding: "4%",
  },
}));

const ListItem = withStyles({
  root: {
    borderRadius: "15px",
    //   background: "",
    "&$selected": {
      backgroundColor: "#019966",
      color: "#FFFFFF",
    },
    "&$selected:hover": {
      backgroundColor: "#019966",
      color: "#FFFFFF",
    },
    "&:hover": {
      backgroundColor: "#3D996050",
      color: "white",
    },
  },
  selected: {},
})(MuiListItem);

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.lista}
      >
        <div className={classes.divLogo}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
        <ListItem
          button
          className={classes.colorFondo}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="Inicio"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem
          button
          className={classes.colorFondo}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DriveEtaIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="Auto"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem button onClick={handleClick} className={classes.colorFondo}>
          <ListItemIcon>
            <EmojiTransportationIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="Planta"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <ArrowRightIcon className={classes.colorIcono} />
              </ListItemIcon>
              <ListItemText
                primary="Buscador de vehiculos"
                className={classes.colorTexto}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <ArrowRightIcon className={classes.colorIcono} />
              </ListItemIcon>
              <ListItemText
                primary="Buscador de obleas"
                className={classes.colorTexto}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <ArrowRightIcon className={classes.colorIcono} />
              </ListItemIcon>
              <ListItemText
                primary="Control de envios"
                className={classes.colorTexto}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          className={classes.colorFondo}
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <ShoppingCartIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="Ventas"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem
          button
          className={classes.colorFondo}
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <AttachMoneyIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="Administracion"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem
          button
          className={classes.colorFondo}
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <SettingsIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="Configuracion"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>

        <ListItem
          button
          className={classes.colorFondo}
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <LocalShippingIcon className={classes.colorIcono} />
          </ListItemIcon>
          <ListItemText
            primary="ECOSOFT"
            className={classes.colorTexto}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      </List>
    </div>
  );
}
