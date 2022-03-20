import React from "react";
import contact from "./contact";
function Card(contact) {
  return contact.forEach(function (dit) {
    <div>
      <h1>{dict.name}</h1>
      <img src={dict.img} alt="avatar" />
      <h1>{dict.email}</h1>
      <h1>{dict.phone}</h1>
    </div>;
  });
}

export default Card;
