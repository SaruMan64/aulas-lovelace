import React from "react";
import Card from "../Card";
import "./Cards.scss";

export default function Cards(props) {
  return (
    <div>
        {props.cards && props.cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
    </div>
  );
}
