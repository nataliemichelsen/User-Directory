import React, { Component } from "react";
import API from "../../util/api";
import "../style.css";

// will use these to connect all components below
import Row from "../row/row";
import Column from "../column/column";
import Container from "../container/container";
import Search from "../search/search";
import Card from "../card/card"
import Nav from "../nav/nav"
import Footer from "../footer/footer"

// class for entire page
// connects other components
class Main extends Component {
  state = {
    results: [],
    users: [],
    sorted: false,
    search: "",
  };

  // component mounting
  // target API then set states of results / sorting
  componentDidMount() {
    API.list()
      .then((res) =>
        this.setState({
          results: res.data.results,
          users: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  // allows for user to filter & sort results
  // replaces dropdown, nav, submit functionality
  // connects with values from card & search
  searchFunction = (query) => {
    const data = this.state.data;
    const filtered = [];

    for (let i in data) {
      // first & last name
      let name =
        data[i].name.firstName.toLowerCase() +
        " " +
        data[i].name.lastName.toLowerCase();
      if (
        name.includes(query) ||
        // email
        data[i].email.includes(query) ||
        // phone
        data[i].phone.includes(query) ||
        // dob
        data[i].dob.date.includes(query)
      ) {
        // push data data
        filtered.push(data[i]);
      }
    }
    // set state of filtered results
    this.setState({
      results: filtered,
    });
  };

  // changes input data based on search function value
  handleInputChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      var values = Object.values(item)
        .join("")
        .toLowerCase();
        console.log(values)
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.searchFunction(filteredList);
    this.setState({ results: filteredList });
  }

  // rendering components data
  render() {
    const results = this.state.results;

    return (
      <div className='main-content'>
        <Nav/>
        <Search
        value={this.state.value}
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
