// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";
// COMPONENTS IMPORTS::==>
import RoomTemplate from "../../components/room/RoomTemplate.component";
import Header from "../../components/header/Header.component";
import PlansWrapper from "../../components/plans/PlansWrapper.component";

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import HeaderImg from "../../assets/components/header/pricing.svg";
import "./Pricing.page.style.scss";
class PricingPage extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { PlansData } = value;

    return (
      <>
        {/* Header */}
        <Header
          img={HeaderImg}
          title={"Check out our pricing plans"}
          returnToHomeBtn={"back to home"}
          // BrowseProductsBtn={"browse products"}
          // goToContactsBtn={"keep in touch"}
          checkServicesBtn={"check out services"}
        >
        </Header>

        {/* plans */}
        <PlansWrapper PlansData={PlansData} />
      </>
    );
  }
}

export default PricingPage;
