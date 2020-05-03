// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./PlanTemplate.component.style.scss";
const PlanTemplate = ({ servicesCost }) => {
  return (
    <section className="PlanTemplate text-center">
      <div className="container">
        <div className="row">
          {servicesCost.map((plan) => (
            <div className="col" key={plan.id}>
              <div className="Plan">
                <div className="planIcon">{plan.icon}</div>
                <div className="PlanHeader">{plan.planeName}</div>
                <div className="planBody">
                  <ul className="featuresList">
                    {plan.featuresList.map((feature) => (
                      <li className="feature">{feature}</li>
                    ))}
                  </ul>
                  <p className="cost">{plan.planeCost}</p>
                  <small className="role text-muted">{plan.role}</small>
                </div>
                <div className="planFooter">
                  <button className="btn btn-light ">ship now!</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTemplate;
