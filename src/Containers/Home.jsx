import React, { Component } from "react";
import API from "../util/API";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Column from "../Components/Column/Column";
import Searchbar from "../Components/Searchbar/Searchbar";
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable";

class Home extends Component {
  state = {
    employeeList: {},
  };

  // When this component is functioning - go get some users.
  componentDidMount() {
    API.populatePeople().then((resultingData) => {
      this.setState({ employeeList: resultingData });
    });
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <Column>
              Searchbar goes here.
              <Searchbar />
            </Column>
          </Row>
          <Row>
              {/* {console.log(this.state.employeeList)} */}
            <EmployeeTable data={this.state.employeeList} />
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
