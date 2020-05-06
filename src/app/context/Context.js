// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
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
