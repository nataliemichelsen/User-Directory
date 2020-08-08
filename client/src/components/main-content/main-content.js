import React, { Component } from 'react';

import API from '../../util/api';

// will use these to connect all components below
import Nav from '../nav/nav';
import Row from '../row/row';
import Column from '../column/column';
import Card from '../card/card';
import Container from '../container/container';

// class for entire page - connects other components
class Main extends Component {
    state = {
        resultsAll: [],
        sortedResults: [],
        results: [],
        sorted: false,
        name: false,
        age: false
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
// timeout
    setTimeout(() => {

    });
    }

// dropdown functionality
    dropdownFunction = (event) => {
        // define consts for this function
        const value = ;
        const sortButton = ;
        const arrowButton = ;
        if () {
            
        } 
    }

}

export default Main;