import React from "react";
import PropTypes from "prop-types";
import UserListItem from "./UserListItem";
import EmptyMessage from "./EmptyMessage";

const UserList = ({ users }) => {


    //  const usersElement = users.map((user) => {
    //    return <UserListItem key={user.id} user={user} />;
    //  });
    //const renderElement = users.length ? usersElement : <p>No Users</p>;


    const renderElement = users.length ? (
      users.map((user) => {
          return <UserListItem key={user.id} {...user} />;
      })
    ) : (
      <EmptyMessage message="No Users" type="info"/>
    );


    return (
      /**
       * This is one way but the disadvantage here is we can not use conditions like if, so better use
       * a veriable instead.
       */
      //   <div>
      //     {users.map((user) => {
      //       return <UserListItem key={user.id} />;
      //     })}
      //   </div>

      <div>
        <ul className="list-group">
         {renderElement}
        </ul>
        
      </div>
    );
};

UserList.propTypes = {
  // users: PropTypes.array.isRequired, //if users is an array
  users: PropTypes.arrayOf(PropTypes.object).isRequired, //if users is an array object
  // test: PropTypes.string.isRequired // shortcode ptsr then tab
  // test: PropTypes.func   // shortcode ptf
  // test: PropTypes.number // shortcode ptn
  // test: PropTypes.bool // ptb
};

export default UserList;
