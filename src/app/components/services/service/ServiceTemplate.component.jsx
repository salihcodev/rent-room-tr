// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./ServiceTemplate.component.style.scss";
const ServiceTemplate = ({ Service }) => {
  return (
    <section className="ServiceTemplate text-center">
      <div className="container">
        <div className="row">
          {Service.map((service) => (
            <div className="col-md-3" key={service.id}>
              <div className="service">
                <div className="serviceHeader">
                  <div className="serviceIcon">icon</div>
                  <h4>{service.planeName}</h4>
                </div>
                <div className="serviceBody">
                  <p className="ship">{service.ship}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTemplate;
