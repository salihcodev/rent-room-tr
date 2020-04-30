// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import SingleRoom from "./singleRoom/SingleRoom.component";

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./SingleRoomWrapper.component.style.scss";
class SingleRoomWrapper extends React.Component {
  static contextType = AppContext;
  value = this.context;
  render() {
    const { singleRoomInfo } = this.value;
  console.log(singleRoomInfo);


    return (
      <section className="singleRoomWrapper">
        <div className="container">
          <SingleRoom singleRoomData={singleRoomInfo} />
        </div>
      </section>
    );
  }
}

export default SingleRoomWrapper;
