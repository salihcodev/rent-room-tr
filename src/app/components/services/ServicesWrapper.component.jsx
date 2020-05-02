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
    <section className="plansWrapper">
      <div className="container">
        <h2 className="heading">Our Plans</h2>
        <ServiceTemplate Service={ServicesData} />
      </div>
    </section>
  );
};

export default ServiceWrapper;
