// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./404.style.component.scss";
const NoteFoundFlag = ({ msgTxt }) => {
  return (
    <>
      <section className="NoteFoundFlag">
        <span className="404">404</span>
        <p className="notFoundDescription">{msgTxt}</p>
      </section>
    </>
  );
};

export default NoteFoundFlag;
