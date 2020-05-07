// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
import AllData from "./data";
import BrowsingLinks from "./BrowsingLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import TestimonialsData from "./TestimonialsData";
import ServicesData from "./ServicesData";
import PlansData from "./PlansData";
import { Projects, Support, Company, companyExperience } from "./SiteMap";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
  state = {
    isSmall: true,
    BrowsingLinks: BrowsingLinks,
    SocialMediaLinks: SocialMediaLinks,
    Projects: Projects,
    TestimonialsData: TestimonialsData,
    PlansData: PlansData,
    ServicesData: ServicesData,
    Support: Support,
    Company: Company,
    companyExperience: companyExperience,
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
      const images = room.fields.images.map((img) => {
        return img.fields.file.url;
      });
      return { id, ...room.fields, img, images };
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
    window.scrollTo({
      top: 188,
      left: 0,
      behavior: "smooth",
    });

    this.setState({
      singleRoomInfo: { ...sRoom },
    });
  };

  // toggle alt navLinks:
  navToggler = () => {
    this.setState({
      isSmall: !this.state.isSmall,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setLocalSingleRoom: this.setLocalSingleRoom,
          navToggler: this.navToggler,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer, AppContext };
