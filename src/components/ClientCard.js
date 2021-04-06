import React, { useState, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import MockApi from "../apis/MockApi";

const ClientCard = ({ isRegisterd }) => {
  const renderClient = () => {
    if (isRegisterd) {
      return (
        <div>
          <h1>this will redirect to the registerd client</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>this will propmt to register</h1>
          <div className="item">
            <Link to={`/register`} className="ui">
              <h1>Register</h1>
            </Link>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <h1>Client card</h1>
      {renderClient()}
    </div>
  );
};

export default ClientCard;
