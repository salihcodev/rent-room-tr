// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { GoPackage } from "react-icons/go";

// COMPONENT IMPORTS::==>
import "./SingleRoom.component.style.scss";
const SingleRoom = ({ singleRoomInfo }) => {
  document.title = `Room | ${singleRoomInfo.name || `rent room service`}`;
  return (
    <section className="singleRoom">
      <h2 className="heading">{singleRoomInfo.name}</h2>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-5 cardImage">
            <img
              src={singleRoomInfo.img}
              className="card-img"
              alt={singleRoomInfo.name}
            />
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
                <small className="text-muted">
                  rating: {singleRoomInfo.rating} / 10
                  <span className="star">
                    {" "}
                    <AiFillStar />
                  </span>
                </small>
              </p>
              <p className="orderRoom">
                <Link to="/contact" className="makeOrder">
                  <span className="btnIcon">
                    <GoPackage />
                  </span>
                  <span className="btnContext">make order</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoom;
