// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context/Context";
// COMPONENTS IMPORTS::==>
import RoomTemplate from "../../components/room/RoomTemplate.component";
import Header from "../../components/header/Header.component";

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import HeaderImg from "../../assets/components/header/rooms.svg";
import "./Rooms.page.style.scss";
class RoomsPage extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { featuredRooms, allRooms } = value;

    return (
      <>
        {/* Header */}
        <Header
          img={HeaderImg}
          title={"look! what we have done"}
          returnToHomeBtn={"back to home"}
          // BrowseProductsBtn={"browse products"}
          // goToContactsBtn={"keep in touch"}
          checkServicesBtn={"check out services"}
        >
          <div className="container">
            <div className="col">
              <div className="pricingHeaderWing rightWing">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora quae eum excepturi?
                </div>
            </div>
          </div>
        </Header>

        {/* Featured */}
        <section className="featuredRoomsWrapper roomWrapper">
          <div className="container">
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
          </div>
        </section>

        {/* All */}
        <section className="allRoomsWrapper roomWrapper">
          <div className="container">
            <h2 className="heading">all rooms</h2>
            <div className="row">
              {allRooms.map((room) => {
                return (
                  <div className="col-md-3" key={room.id}>
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

export default RoomsPage;
