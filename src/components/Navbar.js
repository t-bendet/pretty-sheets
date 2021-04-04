import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui menu">
      <Link className="item" to="/">
        LandingPage
      </Link>
    </div>
  );
};

export default Navbar;
