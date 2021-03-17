import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
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

import logo from "../foto.png";

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
    padding: theme.spacing(1.5, 0),
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
    height: "100vh",
    flexGrow: 1,
    width: "100%",
    background: "#C4C4C4",

    paddingTop: "35px",
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
