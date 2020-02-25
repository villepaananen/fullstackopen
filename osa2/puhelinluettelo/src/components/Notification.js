import React from "react";

export const Notification = ({ notification }) => {
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

  if (notification.message === null) return null;

  if (notification.type === "error") notificationStyle.color = "Red";
  else notificationStyle.color = "RoyalBlue";

  return (
    <div style={notificationStyle} className="notification">
      {notification.message}
    </div>
  );
};
