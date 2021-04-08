import React from "react";
import { Link } from "react-router-dom";
import "../styles/clients.css";

//TODO add links to

const ClientCard = ({ isRegisterd }) => {
  const renderClient = () => {
    if (isRegisterd) {
      return (
        <div>
          <h1
            style={{
              color: "white",
              backgroundColor: "green",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            registration Completed
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={`/register`} className="positive ui button">
            <h1>Complete registration </h1>
          </Link>
        </div>
      );
    }
  };
  return <div className="clients">{renderClient()}</div>;
};

export default ClientCard;
