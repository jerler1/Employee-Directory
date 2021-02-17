import React from "react";
import "./EmployeeTable.css";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

const EmployeeTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((employee, index) => {
          return <EmployeeRow values={employee} key={index}/>;
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
