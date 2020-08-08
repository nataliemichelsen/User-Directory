import React, { Component } from "react";

import API from "../../util/api";

// will use these to connect all components below
import Nav from "../nav/nav";
import Row from "../row/row";
import Column from "../column/column";
import Card from "../card/card";
import Container from "../container/container";

// class for entire page - connects other components
class Main extends Component {
  state = {
    resultsAll: [],
    sortedResults: [],
    results: [],
    sorted: false,
    name: false,
    age: false,
  };

  // component mounting
  componentDidMount() {
    const arrow = document.getElementById("arrow");
    arrow.style.display = "none";

    API.find().then((res) => {
      this.setState({
        resultsAll: res.data.results,
        sortedResults: res.data.results,
        results: res.data.results,
      });
    });
  }

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
    setTimeout(() => {});
  };

  // dropdown (sort) functionality
  dropdownFunction = (event) => {
    // define consts for this function
    const value = event.target.innerText.trim();
    const sortButton = document.getElementById("sortButton");
    const arrow = document.getElementById("arrow");
    if (value !== "By Default") {
      let sorted;
    }
  };
}

// rendering components data
    render () {
        const results = this.state.results;

        // returning all components being pulled in
        return (

        )
    }

export default Main;
