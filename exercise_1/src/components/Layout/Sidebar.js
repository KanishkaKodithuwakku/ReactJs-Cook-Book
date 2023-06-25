import React from "react";
import ListBody from "../ListGroup/ListBody";
import ListItem from "../ListGroup/ListItem";

const Sidebar = ({cols}) => {
  return (
    <aside className={`col-md-${cols} text-light`}>
      <ListBody>
        <ListItem itemStatus="active">Menu</ListItem>
        <ListItem>Users</ListItem>
        <ListItem>Add New User</ListItem>
      </ListBody>

      <ListBody>
        <ListItem itemStatus="active">Menu</ListItem>
        <ListItem>Users</ListItem>
        <ListItem>Add New User</ListItem>
        <ListItem>Add New User</ListItem>
        <ListItem>Add New User</ListItem>
      </ListBody>

      <ListBody>
        <ListItem itemStatus="active">Menu</ListItem>
        <ListItem>Users</ListItem>
        <ListItem>Add New User</ListItem>
        <ListItem>Add New User</ListItem>
      </ListBody>
    </aside>
  );
};

Sidebar.defaultProps = {
  cols : 2
}


export default Sidebar;
