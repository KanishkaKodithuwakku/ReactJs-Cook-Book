import React from "react";
import ListItem from "./ListItem";
import Button from "../Button";


const ListBody = ({ users, handleOnClick, children }) => {
    // const { fname, lname, avatar } = this.props.users;

    if (!users || users.length === 0) {
        return <div className="list-group mt-5 ">{children}</div>;
    }

    return (
      <div className="list-group mt-5 ">
        {users.map((user) => (
          <ListItem
            key={user.id}
            itemHeading={"  " + user.fname + " " + user.lname}
            description={user.username}
            button={
              <Button
                dataId={user.id}
                btnType="danger"
                handleOnClick={handleOnClick}
              >
                Delete
              </Button>
            }
          >
            <img src={user.avatar} alt="avatar" width="40" />
          </ListItem>
        ))}
      </div>
    );
};

export default ListBody;
