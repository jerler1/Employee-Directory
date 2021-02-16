import React from 'react';
import "./EmployeeRow.css";

const EmployeeRow = (props) => {
    {console.log(props.values.email)}
    return (
        <tr>
            <td>
                Email: {props.values.email}
            </td>
        </tr>
    );
};

export default EmployeeRow;