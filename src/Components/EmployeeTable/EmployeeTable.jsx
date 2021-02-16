import React from "react";
import "./EmployeeTable.css";
import EmployeeRow from "../EmployeeRow/EmployeeRow";

const EmployeeTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Headings go here.</th>
          {/* {this.state.employeeList.data?.results.map(result => {
            return <EmployeeRow values={result}/>
        })} */}
        </tr>
      </thead>
      <tbody>
        {props.data.data?.results.map((employee) => {
          return <EmployeeRow values={employee} key={props}/>;
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
