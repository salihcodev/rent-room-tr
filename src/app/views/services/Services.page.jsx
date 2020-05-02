// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import HeaderImg from "../../assets/imgs/defaultBcg.jpeg";
import ServiceWrapper from "../../components/services/ServicesWrapper.component";
import TimeLine from "../../components/timeline/TimeLine.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Services.page.style.scss";
class Services extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { ServicesData } = value;

    // home required data:
    // header:
    const HeaderTitle = "";
    const HeaderDescription = "";

    // services section:
    const ServicesTitle = "hello from services company";
    const ServicesText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus sapiente qui modi perferendis dicta, earum accusantium quis aliquid! Voluptatibus aliquid ducimus dolorum nesciunt repudiandae quibusdam eius debitis quos explicabo!";

    return (
      <>
        {/* HEADER */}
        <Header
          img={HeaderImg}
          title={HeaderTitle}
          btn1="return to home"
          btn2="browse rooms"
        >
          {HeaderDescription}
        </Header>

        {/* SERVICES section */}
        <ServiceWrapper ServicesData={ServicesData} />

        {/* TIMELINE */}
        <TimeLine />
      </>
    );
  }
}

export default Services;
