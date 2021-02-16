import React from "react";
import "./EmployeeRow.css";
const dayjs = require("dayjs");

const EmployeeRow = (props) => {
  const newDate = dayjs(props.values.dob.date).format("MM/DD/YYYY");
  console.log(props.values);
  return (
    <tr>
      <td>
        <img src={props.values.picture.thumbnail}></img>
      </td>
      <td>
        <p id="rem">
          {props.values.name.first} {props.values.name.last}
        </p>
      </td>
      <td>{props.values.phone}</td>
      <td>{props.values.email}</td>
      <td>{newDate}</td>
    </tr>
  );
};

export default EmployeeRow;
