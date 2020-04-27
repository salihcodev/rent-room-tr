// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";

// COMPONENT IMPORTS::==>
import Logo from "../../assets/rent-room.svg";
import "./Navbar.component.style.scss";
class Navbar extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { BrowsingLinks } = value;

    return (
      <>
        <nav className="navBar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <div className="logo">
                  <img src={Logo} alt="" />
                </div>
              </div>
              <div className="col-10">
                <ul className="menuLinks">
                  {BrowsingLinks.map((SLink) => {
                    return (
                      <li className="SLink" key={SLink.id}>
                        <Link to={SLink.path}>{SLink.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
