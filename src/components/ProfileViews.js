import React from "react";
import PropTypes from "prop-types";
import user from "../types/User";

export const ProfileView = ({ user }) => {
  return (
    <div className="profile">
      <div className="ui item">
        <div className="image">
          <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif" />
        </div>
        <div className="content">
          <h2 className="header">{user.username}</h2>
          <div className="description">
            <p>First name: {user.firstname}</p>
            <p>Last name: {user.surename}</p>
            <p>Description: {user.description}</p>
          </div>
        </div>
        <div className="extra content"></div>
      </div>
    </div>
  );
};

ProfileView.propTypes = {
  user: PropTypes.shape(user)
};

ProfileView.defaultProps = {
  user: {
    description: "Fill description",
    firstname: "Fill firstname",
    surename: "Fill second name"
  }
};
