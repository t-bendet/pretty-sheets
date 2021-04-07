import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MockApi from "../apis/MockApi";
import PrograssTable from "./PrograssTable";
const Prograss = () => {
  const { id } = useParams();
  const [clientdata, setClientdata] = useState(undefined);
  useEffect(() => {
    const getClient = async () => {
      const { data } = await MockApi.get("/clients");
      const client = [...data].find((el) => {
        return el.googleId == id;
      });
      setClientdata(client);
    };
    getClient();
  }, []);
  return (
    <div>
      <h1>Prograss</h1>
      {clientdata && <PrograssTable tableData={clientdata} />}
    </div>
  );
};

export default Prograss;
