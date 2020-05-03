// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import CompanyPhilosophy from "../../components/philosophy/CompanyPhilosophy.component";
import PlansWrapper from "../../components/plans/PlansWrapper.component";
import Testimonials from "../../components/testimonials/Testimonials.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Home.page.style.scss";
import HeaderImg from "../../assets/components/header/home.svg";
class HomePage extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { PlansData } = value;

    // home required data:
    // header:
    const HeaderTitle = "Let us give you a nice bed!";
    const HeaderDescription =
      "Presented with too many options, people might plan on thinking deeply about it and making a decision later. Once a visitor is off your site, however, they might come across another hotel they like while they do this. An immediate decision is always better.Landing pages are designed to drive immediate decisions. Landing pages have minimal menus, and no links to other pages or websites. The design and copy on these pages focus on one product or service, and their aim is to get people to convert. Instead of wasting time pondering, people are encouraged to book rooms immediately";

    // about section:
    const AboutTitle = "Company philosophy";
    const AboutText =
      "We’ve seen hotels with 3 or 4 different scrolling banners on their homepage, plus popups and other animations – that’s a distracting mess worthy of the late 90s.! people are encouraged to book rooms immediately";

    return (
      <>
        {/* HEADER */}
        <Header
          img={HeaderImg}
          title={HeaderTitle}
          // returnToHomeBtn="returnToHomeBtn"
          BrowseProductsBtn="browse products"
          // goToContactsBtn="goToContactsBtn"
          checkServicesBtn="our services"
        >
          {HeaderDescription}
        </Header>

        {/* ABOUT THE COMPANY */}
        <CompanyPhilosophy aboutTitle={AboutTitle} aboutContext={AboutText} />

        {/* PLANS */}
        <PlansWrapper PlansData={PlansData} />

        {/* Testimonials */}
        <Testimonials />
      </>
    );
  }
}

export default HomePage;
