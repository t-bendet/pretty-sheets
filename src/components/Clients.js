import React, { useState, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import MockApi from "../apis/MockApi";
import Register from "./Register";

const Clients = ({ clientData, setIsRegisterd }) => {
  const [clientsList, setClientsList] = useState([]);
  const [registerStatus, setRegisterStatus] = useState(setIsRegisterd());
  //TODO return to landing if signed out
  useEffect(() => {
    setIsRegisterd(registerStatus);
  }, [registerStatus]);
  useEffect(() => {
    const getClients = async () => {
      const results = await MockApi.get("/clients");
      setClientsList(results.data);
    };
    getClients();
  }, []);
  const checkIsRegisterd = () => {
    const status = [...clientsList].find((el) => {
      return el.googleId === clientData.RR;
    });
    setRegisterStatus(status);
  };
  const renderClient = () => {
    if (registerStatus) {
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
  return <div>{renderClient()}</div>;
};

export default Clients;
