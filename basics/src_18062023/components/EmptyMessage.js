import React from "react";

const EmptyMessage = ({ message, type }) => {
    return <div className={`alert alert-${type}`}>{message}</div>;
};

EmptyMessage.defaultProps = {
    type : 'success'
}

export default EmptyMessage;
