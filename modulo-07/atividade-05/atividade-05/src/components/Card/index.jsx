import React, { useState } from "react";
import "./Card.scss";

export default function Card(props) {
  console.log("cards", props)
  const [status, setStatus] = useState("");
  switch (props.status) {
    case "Alive":
      setStatus("alive");
      return true;
    case "Dead":
      setStatus("dead");
      return true;
    case "unknown":
      setStatus("unknown");
      return true;
    default:
      console.log("Error");
  }

  return (
    <div className={status}>
      <figure>
        <div className={status + "-stripe"}><span>{status}</span></div>
        <img src={props.image} alt={props.name}/>
      </figure>
      <div>
        <p>
          <strong>Name: </strong> {props.name === "" ? "Confidential" : props.name}
        </p>
        <p>
          <strong>Species: </strong> {props.species === "" ? "Confidential" : props.species}
        </p>
        <p>
          <strong>Type: </strong> {props.type === "" ? "Confidential" : props.type}
        </p>
        <p>
          <strong>Gender: </strong> {props.gender === "" ? "Confidential" : props.gender}
        </p>
      </div>
    </div>
  );
}
