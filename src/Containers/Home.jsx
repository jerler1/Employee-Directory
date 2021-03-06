import React, { Component } from "react";
import API from "../util/API";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Column from "../Components/Column/Column";
import Searchbar from "../Components/Searchbar/Searchbar";
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable";

class Home extends Component {
  state = {
    employeeList: [],
    filteredList: [],
    sortedList: [],
    filter: "",
    asc: true,
  };

  // When this component is functioning - go get some users.
  componentDidMount() {
    API.populatePeople()
      .then((resultingData) => {
        this.setState({
          employeeList: resultingData.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  dynamicSearch = () => {
    return this.state.employeeList.filter((object) => {
      return (
        object.email.includes(this.state.filter) ||
        object.phone.includes(this.state.filter) ||
        object.name.first.includes(this.state.filter) ||
        object.dob.date.includes(this.state.filter)
      );
    });
  };

  // When a button is clicked on the table sort that column.
  handleSorting = (event) => {
    const target = event.target.innerHTML;
    this.setState({ asc: !this.state.asc });
    const direction = this.state.asc ? 1 : -1;
    this.setState({
      sortedList: this.state.employeeList.sort((a, b) => {
        switch (target) {
          case "Name":
            if (a.name.first < b.name.first) {
              return -1 * direction;
            } else if (a.name.first > b.name.first) {
              return 1 * direction;
            } else {
              return 0;
            }
          case "Phone":
            if (a.phone < b.phone) {
              return -1 * direction;
            } else if (a.phone > b.phone) {
              return 1 * direction;
            } else {
              return 0;
            }
          case "Email":
            if (a.email < b.email) {
              return -1 * direction;
            } else if (a.email > b.email) {
              return 1 * direction;
            } else {
              return 0;
            }
          case "DOB":
            if (a.dob.date < b.dob.date) {
              return -1 * direction;
            } else if (a.dob.date > b.dob.date) {
              return 1 * direction;
            } else {
              return 0;
            }
        }
      }),
    });
  };

  render() {
    return (
      <>
        <Container>
          <Row class="row container-fluid">
            <Column class="mx-auto mt-3">
              <Searchbar change={this.handleInputChange} />
            </Column>
          </Row>
          <Row class="row container-fluid">
            <EmployeeTable
              onClickSort={this.handleSorting}
              data={
                this.state.filter === ""
                  ? this.state.employeeList
                  : this.dynamicSearch()
              }
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
