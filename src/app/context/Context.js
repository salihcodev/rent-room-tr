// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
import BrowsingLinks from "./BrowsingLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import SiteMap from "./SiteMap";
import TestimonialsData from "./TestimonialsData";
import AllData from "./data";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
  state = {
    isSmall: true,
    BrowsingLinks: BrowsingLinks,
    SocialMediaLinks: SocialMediaLinks,
    TestimonialsData: TestimonialsData,
    SiteMap: SiteMap,
    allRooms: [],
    featuredRooms: [],
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
    });
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export { AppProvider, AppConsumer, AppContext };
