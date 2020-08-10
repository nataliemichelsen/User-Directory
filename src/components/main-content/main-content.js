import React, { Component } from "react";

import API from "../../util/api";

// will use these to connect all components below
import Row from "../row/Row";
import Column from "../column/Column";
import Card from "../card/Card";
import Container from "../container/Container";
import Search from "../search/Search";

// class for entire page
// connects other components
class Content extends Component {
  state = {
    results: [],
    sorted: false,
    search: "",
  };

  // component mounting
  // target API then set states of results / sorting
  componentDidMount() {
    API.list()
      .then((res) =>
        this.setState({
          result: res.data.results,
          users: res.data.results,
        })
      )
      .catch(err);
  }

  // allows for user to filter & sort results
  // replaces dropdown, nav, submit functionality
  // connects with values from card & search
  searchFunction = event => {
    const users = this.state.users;
    const filtered = [];

    if (users) {
        let name = users[x].name.first.toLowerCase() + " " users[x].name.last.toLowerCase();
        if (name.includes(event))
        ||
        users[x].email.includes(event)
        ||
        users[x].phone.includes(event)  
        ||
        users[x].dob.includes(event)
        {
            
        }
    }

    this.setState({
        results: filtered
    })
  };

  // changes input data based on search function value
  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.searchFunction(value)
    this.setState({
        [name]: value
    });
  };

  // rendering components data
  render() {
    // setting results const to results state
    const results = this.state.results;

    // returning all components being pulled in
    return (
      <div className="main-content">
        <Nav
          submitFunction={this.submitFunction}
          dropdownFunction={this.dropdownFunction}
        />
        <Container>
          <Row>
            {
              // map new param employees
              // bring in search values
              // match to card props
              results.map((employees, x) => (
                <Column key={x}>
                  <Search>
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                  </Search>
                  <Card
                    image={employees.picture}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    DOB={employees.dob.date}
                    phone={employees.phone}
                    email={employees.email}
                  />
                </Column>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
