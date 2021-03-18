import { ListItem } from "material-ui"

<ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Nested Pages" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 1" />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemText inset primary="Nested Page 2" />
          </ListItem>
        </List>
      </Collapse>
<ListItem>