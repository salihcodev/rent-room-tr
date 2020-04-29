// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
import BrowsingLinks from "./BrowsingLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import SiteMap from "./SiteMap";
import TestimonialsData from "./TestimonialsData";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
  state = {
    BrowsingLinks: BrowsingLinks,
    SocialMediaLinks: SocialMediaLinks,
    SiteMap: SiteMap,
    TestimonialsData: TestimonialsData,
    isSmall: true,
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
