import React from "react";

const Header = props => {
  return (
    <header>
      <h2 className="ui header">
        <i className="settings icon"></i>
        <div className="content">
          {props.main}
          <div className="sub header">{props.subheader}</div>
        </div>
      </h2>
    </header>
  );
};

Header.defaultProps = {
  main: "Users Settings",
  subheader: "Manage your users accounts"
};

export default Header;
