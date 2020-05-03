// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import SingleRoomWrapper from "../../components/singleRoomWrapper/SingleRoomWrapper.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./SingleRoom.page.style.scss";
const SingleRoom = () => {
  return (
    <section className="singleRoomPage">
      <div className="container">
        <h2 className="heading">welcome to single room viewer</h2>
        <SingleRoomWrapper />
      </div>
    </section>
  );
};

export default SingleRoom;
