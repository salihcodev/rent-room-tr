// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
import BrowsingLinks from "./BrowsingLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import { Projects, Support, Company, companyExperience } from "./SiteMap";

const AppContext = React.createContext();

const AppConsumer = AppContext.Consumer;
class AppProvider extends React.Component {
  state = {
    BrowsingLinks: BrowsingLinks,
    SocialMediaLinks: SocialMediaLinks,
    Projects: Projects,
    Support: Support,
    Company: Company,
    companyExperience: companyExperience,
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
