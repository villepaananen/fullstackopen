import React from "react";

export const Notification = ({ notificationMessage }) => {
  const notificationStyle = {
    background: "Linen",
    color: "RoyalBlue",
    fontWeight: "bold",
    fontSize: 24,
    borderStyle: "solid",
    borderRadius: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    padding: 10
  };

  if (notificationMessage === null) {
    return null;
  }

  return (
    <div style={notificationStyle} className="notification">
      {notificationMessage}
    </div>
  );
};
