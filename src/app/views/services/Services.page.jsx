// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import HeaderImg from "../../assets/components/header/services.svg";
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
    const HeaderDescription =
      "welcome to our services page, here you gonna meet company provided services and the time line of the company within last few years!!.";

    // services section:
    const ServicesTitle = "what we are providing";
    const ServicesText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus sapiente qui modi perferendis dicta, earum accusantium quis aliquid! Voluptatibus aliquid ducimus dolorum nesciunt repudiandae quibusdam eius debitis quos explicabo!";

    return (
      <>
        <section className="servicesPage">
          {/* HEADER */}
          <Header
            img={HeaderImg}
            title={HeaderTitle}
            returnToHomeBtn="back to home"
            BrowseProductsBtn="return to room"
          >
            {HeaderDescription}
          </Header>

          <div className="container">
            {/* MAIN HEADING AND PAGE DESCRIPTION */}
            <div className="pageDescription text-center">
              <h2 className="heading">{ServicesTitle}</h2>
              <p className="description">{ServicesText}</p>
            </div>

            {/* SERVICES section */}
            <ServiceWrapper ServicesData={ServicesData} />

            {/* TIMELINE */}
            <TimeLine />
          </div>
        </section>
      </>
    );
  }
}

export default Services;
