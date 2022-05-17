import React, { useState } from "react";
import "./Card.scss";

export default function Card(props) {
  const char = props.props;

  return (
    <div className={char.status.toLowerCase()}>
      <figure>
        <div className={char.status.toLowerCase() + "-stripe"}>
          <span>{char.status.toLowerCase()}</span>
        </div>
        <img src={char.image} alt={char.name} />
      </figure>
      <div>
        <p>
          <strong>Name: </strong>{" "}
          {char.name === "" ? "Confidential" : char.name}
        </p>
        <p>
          <strong>Species: </strong>{" "}
          {char.species === "" ? "Confidential" : char.species}
        </p>
        <p>
          <strong>Type: </strong>{" "}
          {char.type === "" ? "Confidential" : char.type}
        </p>
        <p>
          <strong>Gender: </strong>{" "}
          {char.gender === "" ? "Confidential" : char.gender}
        </p>
      </div>
    </div>
  );
}
