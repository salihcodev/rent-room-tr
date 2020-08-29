// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import CompanyPhilosophy from "../../components/philosophy/CompanyPhilosophy.component";
// import Testimonials from "../../components/testimonials/Testimonials.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Home.page.style.scss";
import HeaderImg from "../../assets/components/header/home.svg";
class HomePage extends React.Component {
  static contextType = AppContext;
  render() {


    // home required data:
    // header:
    const HeaderTitle = "Let us give you a nice bed!";

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
          BrowseProductsBtn="browse rooms"
          // goToContactsBtn="goToContactsBtn"
          checkServicesBtn="our services"
        >
        </Header>

        {/* ABOUT THE COMPANY */}
        <CompanyPhilosophy aboutTitle={AboutTitle} aboutContext={AboutText} />

        {/* Testimonials */}
        {/* <Testimonials /> */}
      </>
    );
  }
}

export default HomePage;
