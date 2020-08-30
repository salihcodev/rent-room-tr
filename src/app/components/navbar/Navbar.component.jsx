// BASIC IMPORTS::==>	
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>	

// UTILITIES IMPORTS::==>	
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";

// COMPONENT IMPORTS::==>	
import Logo from "../../assets/appLogo.svg";
import "./Navbar.component.style.scss";
class Navbar extends React.Component {
  static contextType = AppContext;
  render() {
    const value = this.context;
    const { BrowsingLinks, navToggler, isSmall } = value;

    return (
      <>
        <nav className="navBar">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="togglerAndLogoContainer row wing">
                  <div className="toggler col-2">
                    <button className="toggler" onClick={navToggler}>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </button>
                  </div>
                  <div className="logoCont col-6">
                    <Link className="logo" to="/">
                    </Link>
                  </div>
                </div>
              </div>

              <div className="linksList col-7 wing">
                <ul>
                  {BrowsingLinks.map((NLink) => {
                    return (
                      <li className="navLink" key={NLink.id}>
                        <Link to={NLink.path}>{NLink.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="loginBtn col wing">
                <span className="welcome">hello, </span>
                <button className="loginBtn btn btn-dark">
                  <a href="#">
                    <span className="btnIcon">
                      <AiOutlineUser />{" "}
                    </span>
                    <span className="btnContext">login</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* navLinks */}

        <AltNavLinks isSmall={isSmall} className="alternativeLinks">
          <ul>
            {BrowsingLinks.map((NLink) => {
              return (
                <li className="navLink" key={NLink.id}>
                  <Link to={NLink.path}>{NLink.title}</Link>
                </li>
              );
            })}
          </ul>
        </AltNavLinks>
      </>
    );
  }
}
export default Navbar;
const AltNavLinks = styled.div`	
  height: ${(props) => (props.isSmall ? 0 : "150px")};	
  overflow: hidden;	
  transition: all ease 0.2s;	
  ul {	
    margin: 0;	
    padding: 0;	
    list-style: none;	
    li {	
      padding: 6px 5px 0 25px;	
    }	
  }	
`;