// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
import BrowsingLinks from "./BrowsingLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import SiteMap from "./SiteMap";
import TestimonialsData from "./TestimonialsData";
import ServicesData from "./ServicesData";
import AllData from "./data";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
  state = {
    isSmall: true,
    BrowsingLinks: BrowsingLinks,
    SocialMediaLinks: SocialMediaLinks,
    TestimonialsData: TestimonialsData,
    ServicesData: ServicesData,
    SiteMap: SiteMap,
    allRooms: [],
    featuredRooms: [],
    singleRoomInfo: {},
  };

  componentDidMount() {
    this.fetchData(AllData); //allData
  }

  fetchData = (allData) => {
    let allRooms = allData.map((room) => {
      const { id } = room.sys;
      const img = room.fields.images[0].fields.file.url;
      const CombinedData = { id, ...room.fields, img };

      return CombinedData;
    });

    let featuredRooms = allRooms.filter((fRoom) => {
      return fRoom.featured === true;
    });

    this.setState({
      allRooms,
      featuredRooms,
      singleRoomInfo: this.getLocalSingleRoom(),
    });
  };

  getLocalSingleRoom = () => {
    let getSingleRoom = localStorage.getItem("singleRoom");

    return getSingleRoom ? JSON.parse(getSingleRoom) : {};
  };

  setLocalSingleRoom = (id) => {
    let sRoom = this.state.allRooms.find((sRoom) => sRoom.id === id);
    // localStorage here
    localStorage.setItem("singleRoom", JSON.stringify(sRoom));

    this.setState({
      singleRoomInfo: { ...sRoom },
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{ ...this.state, setLocalSingleRoom: this.setLocalSingleRoom }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer, AppContext };
