import React from "react";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="avatar" />
      <h1>{props.phone}</h1>
    </div>
  );
}

export default Card;
