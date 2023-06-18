import React from "react";
import Button from "./Button";
const UserListItem = ({ id, name, age, email, mobile, onRemoveUser }) => {
  // const { name, age, email, id, mobile } = users;
  return (
    <li className="list-group-item">
      <h5>{name}</h5>
      <p>{email}</p>
      <span>{age}</span>
      <p>{mobile}</p>
      <Button type="danger" onRemoveUser={onRemoveUser} userId={id}>
        Remove
      </Button>
    </li>
  );
};

export default UserListItem;
