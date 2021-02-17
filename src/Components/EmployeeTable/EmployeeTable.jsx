import React from "react";
import "./EmployeeTable.css";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

const EmployeeTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={(event) => props.onClickSort(event)}>Name</th>
          <th onClick={(event) => props.onClickSort(event)}>Phone</th>
          <th onClick={(event) => props.onClickSort(event)}>Email</th>
          <th onClick={(event) => props.onClickSort(event)}>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((employee, index) => {
          return <EmployeeRow values={employee} key={index} />;
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
