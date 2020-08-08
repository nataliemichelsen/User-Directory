import React from "react";

import "../style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark">
      <span className="navbar-brand">
          User Directory
      </span>

      <form
        className="input-group"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="form-control search"
          id="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.submit}
        />
      </form>

      <div className="dropdown">
        <button
          className="dropdown-button btn-secondary"
          type="button"
          id="menu-button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <p id="sort-button">
              Sort
          </p>
          <i className="fas fa-angle-up" id="arrow"></i>
        </button>

        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="menu-button"
        >
          <button className="dropdown-item" onClick={props.dropdownFunc}>
            Sort By Default
          </button>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item" onClick={props.dropdownFunc}>
            Sort By Name
          </button>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item" onClick={props.dropdownFunc}>
            Sort By Age
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
