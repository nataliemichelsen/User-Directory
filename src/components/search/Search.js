import React from "react";

function Search(props) {
    return (
        <div className="form-group">
        <br />
          <input
            onChange={props.handleInputChange}
            value={props.value}
            placeholder="Search"
            name="search-function"
            type="text"
            className="search-function"
            id="search"
          />
          <br />
        </div>
    );
}

export default Search;