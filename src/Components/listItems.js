import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import DriveEtaIcon from "@material-ui/icons/DriveEta";
import HomeIcon from "@material-ui/icons/Home";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const Listas = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DriveEtaIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Vehiculos" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmojiTransportationIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Planta" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Ventas" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SupervisorAccountIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Administracion" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Contabilidad" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="Configuracion" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalShippingIcon style={{ fill: "#818181" }} />
        </ListItemIcon>
        <ListItemText primary="ECOSOFT" />
      </ListItem>
    </div>
  );
};

export default Listas;

{
  /* <List>
{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List>
<Divider />
<List>
{["All mail", "Trash", "Spam"].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List> */
}

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
