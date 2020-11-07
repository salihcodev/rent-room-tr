// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import ServiceTemplate from "./service/ServiceTemplate.component";

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./ServicesWrapper.component.style.scss";
const ServiceWrapper = ({ ServicesData }) => {
  return (
    <section className="servicesWrapper container">
      <h2 className="heading">our provided services</h2>
      <ServiceTemplate Service={ServicesData} />
    </section>
  );
};

export default ServiceWrapper;
