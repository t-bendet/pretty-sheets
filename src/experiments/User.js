import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
function User(props) {
  const { first, last } = useParams();
  const match = useRouteMatch("/user/pini/hodadad");
  //console.log(match);
  console.log(props);
  console.log(match);

  return (
    <div>
      User Page: {first}, {last}
      {match && <button>Call For Help</button>}
    </div>
  );
}

export default User;

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
