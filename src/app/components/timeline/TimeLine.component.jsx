// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./TimeLine.component.style.scss";
class TimeLine extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { CompanyTimeLine } = value;

    return (
      <section className="timeline">
        <div className="container">
          <div className="timelineWrapper">
            <h2 className="heading">company timeline</h2>
            <div className="achievements">
              {CompanyTimeLine.map((achieve) => (
                <div
                  className="alert alert-success achieve"
                  role="alert"
                  key={achieve.id}
                >
                  <h4 className="alert-heading">{achieve.title}</h4>
                  <p>{achieve.achievement}</p>
                  <hr />
                  <p className="mb-0">{achieve.history}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TimeLine;
