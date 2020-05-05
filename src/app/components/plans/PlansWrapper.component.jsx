// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import PlanTemplate from "./plan/PlanTemplate.component";

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import "./PlansWrapper.component.style.scss";
const PlansWrapper = ({ PlansData }) => {
  return (
    <section className="plansWrapper">
      <div className="container">
        <h2 className="heading">Our Plans</h2>
        <PlanTemplate servicesCost={PlansData} />
      </div>
    </section>
  );
};

export default PlansWrapper;
