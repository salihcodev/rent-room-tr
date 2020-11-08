// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";
// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";
import { FiMaximize2 } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

// COMPONENT IMPORTS::==>
import "./RoomTemplate.component.style.scss";
const RoomTemplate = ({ room, featured }) => {
  const { setLocalSingleRoom } = React.useContext(AppContext);

  return (
    <section className="roomTemplate card">
      <div className="imgCont">
        <img src={room.img} className="" alt={room.name} />
        <Link
          to={`/rooms/${room.id}`}
          className="roomViewer"
          onClick={() => {
            setLocalSingleRoom(room.id);
          }}
        >
          <FiMaximize2 />
        </Link>
      </div>
      <div className="skewedImgCont">
        
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <div className="roomTitle">{room.name}</div>
        </h5>
        <p className="card-text roomContext text-muted">{room.extras}</p>
        <p className="card-text rating">
          <small className="text-muted">
            rating: {room.rating} / 10
            <span className="star">
              {" "}
              <AiFillStar />
            </span>
          </small>
        </p>
      </div>
    </section>
  );
};

export default RoomTemplate;
