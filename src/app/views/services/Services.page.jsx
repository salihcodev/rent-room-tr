// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import HeaderImg from "../../assets/components/header/services.svg";
import ServiceWrapper from "../../components/services/ServicesWrapper.component";

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
    // services section:
    const ServicesTitle = "what we are providing";
    document.title = `Rent Room | services`;

    return (
      <main className="contactPage">
        <section className="servicesPage">
          {/* HEADER */}
          <Header
            img={HeaderImg}
            title={ServicesTitle}
            returnToHomeBtn="back to home"
            BrowseProductsBtn="return to rooms"
          ></Header>
          {/* SERVICES section */}
          <ServiceWrapper ServicesData={ServicesData} />
        </section>
      </main>
    );
  }
}

export default Services;
