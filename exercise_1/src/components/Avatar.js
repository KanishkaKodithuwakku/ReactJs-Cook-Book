import React from "react";

const Avatar = ({ imageSrc, name, description }) => {
  return (
    <div className="avatar">
      <img src={imageSrc} alt={name} className="avatar-image" />
      <div className="avatar-details">
        <h2 className="avatar-name">{name}</h2>
        <p className="avatar-description">{description}</p>
      </div>
    </div>
  );
};

export default Avatar;
