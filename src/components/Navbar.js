import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ renderAuthButton, userStatus, clientStatus }) => {
  const renderNav = () => {
    if (userStatus && clientStatus) {
      //TODO change to active links with conditional rendering by client....
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
    } else if (userStatus) {
      return (
        <React.Fragment>
          <div className="item">
            <div
              className="ui"
              data-inverted=""
              data-tooltip="Register Now! to log and track your prograss"
              data-position="bottom right"
            >
              Prograss
            </div>
          </div>
          <div className="item">
            <div
              className="ui"
              data-inverted=""
              data-tooltip="Register Now! to keep track of that busy schedule"
              data-position="bottom center"
            >
              Track Your Meetings
            </div>
          </div>
          <div className="item">
            <div
              className="ui"
              data-inverted=""
              data-tooltip="Register Now! and add your daily achievements"
              data-position="bottom left"
            >
              Daily Report
            </div>
          </div>
        </React.Fragment>
      );
    }
  };
  return (
    <div className="ui menu">
      <div className="item">Preety sheets &trade;</div>
      {renderNav()}
      <div className="item right">{renderAuthButton()}</div>
    </div>
  );
};

export default Navbar;
