// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";
// COMPONENTS IMPORTS::==>
import RoomTemplate from "../../components/room/RoomTemplate.component";
import Header from "../../components/header/Header.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import HeaderImg from "../../assets/components/header/pricing.svg";
import "./Pricing.page.style.scss";
class PricingPage extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { featuredRooms, allRooms, singleRoomInfo } = value;
    
    return (
      <>
        {/* Header */}
        <Header
          img={""}
          title={"look! what we have done"}
          btn1={"check prices plans"}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="pricingHeaderWing leftWing">
                  <div className="imgWing">
                    <img src={HeaderImg} alt="img" />
                  </div>
                  <div className="textWing">
                    <p className="text">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <button className="wingBtn">rent one</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pricingHeaderWing rightWing">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quae eum excepturi?
                </div>
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
                    <RoomTemplate  room={room} />
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

export default PricingPage;
