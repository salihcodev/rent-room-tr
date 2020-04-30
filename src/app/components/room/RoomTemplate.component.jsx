// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";
// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>

import "./RoomTemplate.component.style.scss";
class RoomTemplate extends React.Component {
  static contextType = AppContext;
  value = this.context;
  render() {
    const { room } = this.props;
    const { setLocalSingleRoom } = this.value;

    return (
      <section className="roomTemplate card">
        <img src={room.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <div className="roomTitle">{room.name}</div>
          </h5>
          <p className="card-text roomContext text-muted">{room.extras}</p>
          <p className="card-text rating">
            <small className="text-muted"> * * * * * </small>
          </p>
        </div>

        <Link
          to={`/pricing/${room.id}`}
          onClick={() => {
            setLocalSingleRoom(room.id);
          }}
        >
          <button className="btn btn-dark">view room</button>
        </Link>
      </section>
    );
  }
}

export default RoomTemplate;
