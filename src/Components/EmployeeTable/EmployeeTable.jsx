import React from "react";
import "./EmployeeTable.css";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

const EmployeeTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>
            <button onClick={(event) => props.onClickSort(event)}>Name</button>
          </th>
          <th>
            <button onClick={(event) => props.onClickSort(event)}>Phone</button>
          </th>
          <th>
            <button onClick={(event) => props.onClickSort(event)}>Email</button>
          </th>
          <th>
            <button onClick={(event) => props.onClickSort(event)}>DOB</button>
          </th>
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
