import React, { Component } from "react";
import API from "../util/API";
// import Container
// import Employee
// import EmployeeRow

class Home extends Component {
  state = {
    employeeList: {},
  };

  // When this component is functioning - go get some users.
  componentDidMount() {
    API.populatePeople().then((resultingData) => {
        this.setState({ employeeList: resultingData })
    });
  }
  render() {
    return (
        <>
        // Container
        // Table Headers
        // Map over data - which return Row
        {this.state.employeeList.data?.results.map(result => {
            return <Row />
        })}
        <div>
            Hi {this.state.employeeList.data?.results[0].name.first}
        </div>
        </>);
  }
}

export default Home;
