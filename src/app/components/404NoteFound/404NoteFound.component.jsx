// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./404NotFound.component.style.scss";
const NoteFoundFlag = ({ msgTxt }) => {
  return (
    
    <>
      <section className="NoteFoundFlag">
        <div className="container">
          <div className="error">
            <div>
              <p className="notFoundDescription">
                <span className="sorry">sorry</span>,
                {msgTxt}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoteFoundFlag;
