import React, { Component } from "react";

import API from "../../util/api";

// will use these to connect all components below
import Row from "../row/Row";
import Column from "../column/Column";
import Card from "../card/Card";
import Container from "../container/Container";
import Search from "../search/Search";

// class for entire page - connects other components
class Content extends Component {
    state = {
        results: [],
        sorted: false,
        search: ""
    };

    // component mounting
    componentDidMount() {
        // target API then set states of results / sorting
        API.list()
        .then(res => this.setState({ 
          result: res.data.results,
          users:res.data.results
        })
      ).catch(err);
    }

    searchFunction = (event) => {
        const users = this.state.users;
        const filtered = [];
    };

    // submit functionality
    submitFunction = (event) => {
        // define value & results & sorting using previously declared states ^
        const value = event.target.value;
        const resultsAll = this.state.resultsAll;
        const sortedResults = this.state.sortedResults;

        // filter & sort array
        let filtered;
        let array;

        // sorting
        if (!this.state.sortedResults) {
            array = resultsAll;
        } else {
            array = sortedResults;
        }
        // timeout to search by phone, name, or dob
        setTimeout(() => {
            // set new param employee for search filters using value match
            if (value.match(/[0-9]/gi)) {
                filtered = array.filter(employee =>
                    // phone
                        employee.phone.includes(value) 
                        || 
                    // date
                        employee.dob.date.includes(value)
                        ||
                    // age
                        employee.dob.age.toString().includes(value)
                    );
            // keep name separate under else statement (use as default)
            } else {
                filtered = array.filter(employee =>
                    // first name
                        employee.name.first.toLowerCase().includes(value.toLowerCase())
                        ||
                    // last name
                        employee.name.last.toLowerCase().includes(value)
                    );
            }

            // setting filter state
            if (value !== '' && filtered.length !==0) {
                this.setState({results: filtered});
            // setting default vs. filter
            } else {
                // setting default results if no filter used (default)
                if (!this.state.sorted) {
                    this.setState({results: this.state.resultsAll})
                // setting search results if sort filter is used
                } else {
                    this.setState({results: this.setState.sortedResults})
                }
            }
        });
    };

    // rendering components data
render() {
    // setting results const to results state
    const results = this.state.results;

    // returning all components being pulled in
    return (
        <div className='main-content'>
            <Nav
                submitFunction={this.submitFunction}
                dropdownFunction={this.dropdownFunction} />
            <Container>
                <Row>
                    {
                        // map new param employees & match to card props
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
    )
}
}



export default Main;
