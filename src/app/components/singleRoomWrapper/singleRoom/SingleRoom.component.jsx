// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./SingleRoom.component.style.scss";
const SingleRoom = ({ singleRoomData }) => {
  // console.log(singleRoomData);

  return (
    <section className="singleRoom">
      <h2 className="heading">{singleRoomData.name}</h2>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 cardImage">
            <img src={singleRoomData.img} className="card-img" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h4 className="card-title">{singleRoomData.name} </h4>
              <p className="card-text room description">
                {singleRoomData.description}
              </p>
              <p className="card-text addInformation">
                <span className="addInfo price">
                  price: {singleRoomData.price}
                </span>
                <span className="addInfo type">
                  type: {singleRoomData.type}
                </span>
                <span className="addInfo slug">
                  slug: {singleRoomData.slug}
                </span>
                <span className="addInfo size">
                  size: {singleRoomData.size}
                </span>
                <span className="addInfo capacity">
                  capacity: {singleRoomData.capacity}
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
