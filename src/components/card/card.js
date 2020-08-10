import React from "react";
import Moment from "react-moment";

import "../style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          className="profile-image"
          src={props.image}
          alt={`Viewing profile for ${props.firstName} ${props.lastName}.`}
        />

        <p className="profile-name text">
          {props.firstName} {props.lastName}
        </p>

        <p className="profile-age text">Age: {props.age}</p>

        <p className="profile-dob text">
          Dob:{" "}
          <Moment format="MM/DD/YYYY" className="moment">
            {props.DOB}
          </Moment>
        </p>

        <p className="profile-phone text">{props.phone}</p>

        <a className="profile-email" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </div>
    </div>
  );
}

export default Card;
