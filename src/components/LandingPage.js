import React from "react";
import { Link } from "react-router-dom";

const LandingPage = ({ userStatus }) => {
  const renderPage = () => {
    if (userStatus) {
      return (
        <React.Fragment>
          <h1>welcome back</h1>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>register mudafaka</h1>
          <div className="item right">
            <Link to="/register" class="ui button ">
              Register
            </Link>
          </div>
        </React.Fragment>
      );
    }
  };
  return <div className="ui grid container center aligned">{renderPage()}</div>;
};

export default LandingPage;

//TODO add register link
