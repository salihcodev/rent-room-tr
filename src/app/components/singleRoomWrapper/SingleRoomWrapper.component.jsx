// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import SingleRoom from "./singleRoom/SingleRoom.component";
import RoomTemplate from "../room/RoomTemplate.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./SingleRoomWrapper.component.style.scss";
class SingleRoomWrapper extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { singleRoomInfo, featuredRooms } = value;

    return (
      <>
        <section className="singleRoomWrapper">
          <SingleRoom singleRoomInfo={singleRoomInfo} />
        </section>

        {/* Featured */}
        <section className="featuredRoomsWrapper roomWrapper">
          <h2 className="heading">featured rooms</h2>
          <div className="row">
            {featuredRooms.map((room) => {
              return (
                <div className="col-md-4" key={room.id}>
                  <RoomTemplate room={room} />
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default SingleRoomWrapper;
