// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>

import "./CompanyPhilosophy.component.style.scss";
const CompanyPhilosophy = ({ aboutTitle, aboutContext }) => {
  return (
    <section className="aboutCompany">
      <div className="container">
        <h2 className="aboutTitle">{aboutTitle}</h2>
        <p className="aboutContext">{aboutContext}</p>
      </div>
    </section>
  );
};

export default CompanyPhilosophy;
