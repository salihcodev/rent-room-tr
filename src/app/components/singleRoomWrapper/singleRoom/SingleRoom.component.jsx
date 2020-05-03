// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./SingleRoom.component.style.scss";
const SingleRoom = ({ singleRoomInfo }) => {

  return (
    <section className="singleRoom">
      <h2 className="heading">{singleRoomInfo.name}</h2>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 cardImage">
            <img src={singleRoomInfo.img} className="card-img" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h4 className="card-title">{singleRoomInfo.name} </h4>
              <p className="card-text room description">
                {singleRoomInfo.description}
              </p>
              <p className="card-text addInformation">
                <span className="addInfo price">
                  price: {singleRoomInfo.price}
                </span>
                <span className="addInfo type">
                  type: {singleRoomInfo.type}
                </span>
                <span className="addInfo slug">
                  slug: {singleRoomInfo.slug}
                </span>
                <span className="addInfo size">
                  size: {singleRoomInfo.size}
                </span>
                <span className="addInfo capacity">
                  capacity: {singleRoomInfo.capacity}
                </span>
              </p>
              <p className="card-text rating">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoom;
