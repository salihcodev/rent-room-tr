// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";
// COMPONENTS IMPORTS::==>
import RoomTemplate from "../../components/room/RoomTemplate.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Pricing.page.style.scss";
class PricingPage extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { featuredRooms, allRooms } = value;
    return (
      <>
        <section className="featuredRoomsWrapper roomWrapper">
          <div className="container">
            <h2 className="heading">featured rooms</h2>
            <div className="row">
              {featuredRooms.map((room) => {
                return (
                  <div className="col-md-4">
                    <RoomTemplate room={room} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="allRoomsWrapper roomWrapper">
          <div className="container">
            <h2 className="heading">all rooms</h2>
            <div className="row">
              {allRooms.map((room) => {
                return (
                  <div className="col-md-3">
                    <RoomTemplate room={room} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PricingPage;
