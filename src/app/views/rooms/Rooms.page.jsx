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

    document.title = `Rent Room | Our Rooms`;
    return (
      <main className="contactPage">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quae eum excepturi?
              </div>
            </div>
          </div>
        </Header>

        {/* Featured */}
        <section className="featuredRoomsWrapper roomWrapper">
          <div className="container">
            <div className="roomsBlock">
              <h2 className="heading">featured rooms</h2>
              <div className="row">
                {featuredRooms.map((room) => {
                  return (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6 col-xs-12"
                      key={room.id}
                    >
                      <RoomTemplate room={room} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* All */}
        <section className="allRoomsWrapper roomWrapper">
          <div className="container">
            <div className="roomsBlock">
              <h2 className="heading">all rooms</h2>
              <div className="row">
                {allRooms.map((room) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-xs-12" key={room.id}>
                      <RoomTemplate room={room} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default RoomsPage;
