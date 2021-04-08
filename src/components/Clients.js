import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import MockApi from "../apis/MockApi";
const Clients = ({ clientData, setIsRegisterd }) => {
  const [clientsList, setClientsList] = useState([]);
  const [redirect, setRedirect] = useState(null);
  //TODO return to landing if signed out
  useEffect(() => {
    const getClients = async () => {
      const results = await MockApi.get("/clients");
      setClientsList(results.data);
    };
    getClients();
  }, []);
  // TODO fix logic,only works if there is at least one client registerd
  useEffect(() => {
    if (clientsList.length) {
      const status = [...clientsList].find((el) => {
        return el.googleId == clientData.RR;
      });
      if (status) {
        setIsRegisterd(true);
      }
      setRedirect(<Redirect to={`clients/${clientData.RR}`} />);
    }
  }, [clientsList]);

  return <div>{<h1>Loading</h1> && redirect}</div>;
};

export default Clients;
