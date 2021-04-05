import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ renderAuthButton, userStatus }) => {
  const renderNav = () => {
    if (userStatus) {
      return (
        <React.Fragment>
          <div className="item">
            <div>prograss</div>
          </div>
          <div className="item">
            <div>track your meetings</div>
          </div>
          <div className="item">
            <div>daily report</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="item right">
          <Link to="/register" class="ui button ">
            Register
          </Link>
        </div>
      );
    }
  };
  return (
    <div className="ui menu">
      <Link className="item" to="/">
        LandingPage
      </Link>
      {renderNav()}
      <div className="item right">{renderAuthButton()}</div>
    </div>
  );
};

export default Navbar;
//TODO add Links
