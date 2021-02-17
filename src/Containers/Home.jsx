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
    filteredList: {},
    filter: "",
  };

  // When this component is functioning - go get some users.
  componentDidMount() {
    API.populatePeople()
      .then((resultingData) => {
        this.setState({
          employeeList: resultingData,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    // get emp lis from this.state
    // filter it based ont whats in event
    // set filtered emp to the new filtered array
    this.setState({ filter: event.target.value });
    this.setState({
      filteredList: this.state.employeeList.data.results.filter((object) => {
        console.log(object);
        object.name.first.includes(this.state.filter);
      }),
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row class="row container-fluid">
            <Column>
              <Searchbar change={this.handleInputChange} />
            </Column>
          </Row>
          <Row class="row container-fluid">
            <EmployeeTable
              data={
                this.state.filter === ""
                  ? this.state.employeeList
                  : this.state.filteredList
              }
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
