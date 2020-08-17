import React, { Component } from "react";
import API from "../../util/api";
import "../style.css";

// will use these to connect all components below
import Row from "../row/Row";
import Column from "../column/Column";
import Container from "../container/Container";
import Search from "../search/Search";
import Card from "../card/Card"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

// class for entire page
// connects other components
class Main extends Component {
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
      .catch((err) => console.log(err));
  }

  // allows for user to filter & sort results
  // replaces dropdown, nav, submit functionality
  // connects with values from card & search
  searchFunction = (query) => {
    const users = this.state.users;
    const filtered = [];

    for (let i in users) {
      // first & last name
      let name =
        users[i].name.firstName.toLowerCase() +
        " " +
        users[i].name.lastName.toLowerCase();
      if (
        name.includes(query) ||
        // email
        users[i].email.includes(query) ||
        // phone
        users[i].phone.includes(query) ||
        // dob
        users[i].dob.date.includes(query)
      ) {
        // push users data
        filtered.push(users[i]);
      }
    }
    // set state of filtered results
    this.setState({
      results: filtered,
    });
  };

  // changes input data based on search function value
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.searchFunction(value);
    this.setState({
      [name]: value,
    });
  };

  // rendering components data
  render() {
    const results = this.state.results;

    return (
      <div className='main-content'>
        <Nav/>
        <Search
        value={this.state.search}
        handleInputChange={this.handleInputChange} />
        <Container>
          <Row>
            {
              results.map((employees, i) => (
                <Column key={i} size="col-lg-8">
                  <Card
                    image={employees.picture.large}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    DOB={employees.dob.date}
                    phoneNum={employees.phone}
                    email={employees.email}
                  />
                </Column>
              ))
            }
          </Row>
        </Container>
        <Footer/>
      </div>

    )
  }
}


export default Main;
