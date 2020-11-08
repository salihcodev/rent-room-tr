// BASIC IMPORTS::==>
import React from "react";
import { AppContext } from "../../context";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";

// COMPONENT IMPORTS::==>
import Logo from "../../assets/appLogo.svg";
import "./Navbar.component.style.scss";
const Navbar = () => {
  const { BrowsingLinks, navToggler, isSmall } = React.useContext(AppContext);

  let { pathname: currentLocation } = useLocation();
  let btnColor;
  switch (currentLocation) {
    case "/contact":
      btnColor = "#d0566a";
      break;

    case "/rooms":
      btnColor = "#486770";
      break;

    case "/pricing":
      btnColor = "#d0993a";
      break;

    case "/services":
      btnColor = "#2f6365";
      break;

    case "/":
      btnColor = "#202130";
      break;

    default:
      btnColor = "#434e5b";
      break;
  }
  return (
    <>
      <nav className="navBar">
        <div className="nav-wrapper">
          <div className="togglerAndLogoContainer wing">
            <div className="toggler">
              <button className="toggler" onClick={navToggler}>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </button>
            </div>
            <div className="logoCont">
              <Link className="logo" to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="linksList wing">
            <ul>
              {BrowsingLinks.map((NLink) => {
                return (
                  <li className="navLink" key={NLink.id}>
                    <NavLink
                      exact
                      activeClassName="isNavLinkActive"
                      to={NLink.path}
                    >
                      {NLink.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="loginBtn wing">
            <a
              href="#"
              className="loginBtn"
              style={{ backgroundColor: `${btnColor}` }}
            >
              <span className="btnIcon">
                <AiOutlineUser />{" "}
              </span>
              <span className="btnContext">login</span>
            </a>
          </div>
        </div>
      </nav>
      {/* navLinks */}

      <AltNavLinks isSmall={isSmall} className="alternativeLinks">
        <ul>
          {BrowsingLinks.map((NLink) => {
            return (
              <li className="navLink" key={NLink.id}>
                <NavLink
                  exact
                  activeClassName="isNavLinkActive"
                  to={NLink.path}
                >
                  {NLink.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </AltNavLinks>
    </>
  );
};

export default Navbar;
const AltNavLinks = styled.div`
  display: ${(props) => (props.isSmall ? `none` : `block`)};
  height: ${(props) => (props.isSmall ? 0 : "11rem")};
  padding: ${(props) => (props.isSmall ? 0 : "1rem")} 0;
  overflow: hidden;
`;
