// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./ServiceTemplate.component.style.scss";
const ServiceTemplate = ({ Service }) => {
  return (
    <section className="ServiceTemplate ">
      <div className="container">
        <div className="row">
          {Service.map((service) => (
            <div key={service.id} className="col-md-4">
              <div className="card mb-3">
                <div className="serviceIcon">{service.icon}</div>
                <div className="serviceHeader card-header card-title">
                  <h4>{service.serviceName}</h4>
                </div>
                <div className="service card-body">
                  <p class="card-text">{service.serviceDescription}</p>
                  <div className="serviceBody">
                    <small className="ship text-muted">availability: {service.availability}</small>
                  </div>
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
