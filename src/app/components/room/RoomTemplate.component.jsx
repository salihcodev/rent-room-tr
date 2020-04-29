// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>

import "./RoomTemplate.component.style.scss";
const RoomTemplate = ({ room }) => {
  return (
    <section className="roomTemplate card">
      <img src={room.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          <div className="roomTitle">{room.name}</div>
        </h5>
        <p class="card-text roomContext text-muted">{room.extras}</p>
        <p class="card-text rating">
          <small class="text-muted"> * * * * *</small>
        </p>
      </div>
    </section>
  );
};

export default RoomTemplate;
