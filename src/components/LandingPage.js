import React from "react";
import { Link } from "react-router-dom";

const LandingPage = ({ userStatus, renderAuthButton, clientStatus }) => {
  const renderPage = () => {
    if (userStatus) {
      // logged in
      return (
        <React.Fragment>
          <h1>welcome back</h1>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>sign in mudafaka</h1>
          {renderAuthButton()}
        </React.Fragment>
      );
    }
  };
  //return <div className="ui grid container center aligned">{renderPage()}</div>;
  return <div className="ui grid container center aligned">Landing page</div>;
};

export default LandingPage;

//TODO add register link
