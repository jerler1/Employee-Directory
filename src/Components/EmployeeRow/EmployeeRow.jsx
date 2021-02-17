import React from "react";
import "./EmployeeRow.css";
const dayjs = require("dayjs");

const EmployeeRow = (props) => {
  const newDate = dayjs(props.values.dob.date).format("MM/DD/YYYY");
  return (
    <tr>
      <td className="align-middle">
        <img src={props.values.picture.thumbnail}></img>
      </td>
      <td className="align-middle">
        <p id="rem">
          {props.values.name.first} {props.values.name.last}
        </p>
      </td>
      <td className="align-middle">{props.values.phone}</td>
      <td className="align-middle">{props.values.email}</td>
      <td className="align-middle">{newDate}</td>
    </tr>
  );
};

export default EmployeeRow;
