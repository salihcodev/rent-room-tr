// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiProfileLine } from "react-icons/ri";
import {
  TiContacts,
  TiArrowBackOutline,
  TiChartBarOutline,
} from "react-icons/ti";

// COMPONENT IMPORTS::==>
import "./Header.component.style.scss";
const Header = ({
  img,
  title,
  returnToHomeBtn,
  BrowseProductsBtn,
  goToContactsBtn,
  checkServicesBtn,
  children,
}) => {
  return (
    <MainHeader
      img={img ? img : null}
      returnToHomeBtn={returnToHomeBtn ? true : false}
      BrowseProductsBtn={BrowseProductsBtn ? true : false}
      goToContactsBtn={goToContactsBtn ? true : false}
      checkServicesBtn={checkServicesBtn ? true : false}
      className="mainHeader"
    >
      <div className="container">
        <h1 className="headerHeading">{title}</h1>
        <div className="headerBody">
          <div className="headerContentWrapper">{children}</div>
        </div>
        <div className="buttons">
          <div className="headerBtnsWrapper">
            <Link to="/" className="returnToHomeBtn">
              <span className="btnIcon">
                <TiArrowBackOutline />
              </span>
              <span className="btnContext">{returnToHomeBtn}</span>
              <span className="arrow"></span>
            </Link>

            <Link to="rooms" className="BrowseProductsBtn">
              <span className="btnIcon">
                <RiProfileLine />
              </span>
              <span className="btnContext">{BrowseProductsBtn}</span>
              <span className="arrow"></span>
            </Link>

            <Link to="contact" className="goToContactsBtn">
              <span className="btnIcon">
                <TiContacts />
              </span>
              <span className="btnContext">{goToContactsBtn}</span>
              <span className="arrow"></span>
            </Link>

            <Link to="services" className="checkServicesBtn">
              <span className="btnIcon">
                <TiChartBarOutline />
              </span>
              <span className="btnContext">{checkServicesBtn}</span>
              <span className="arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </MainHeader>
  );
};

export default Header;
// i used styled component just for get benefit of using props inside <style>.
const MainHeader = styled.header`
  background: url(${(props) => props.img}) center/cover;
  min-height: ${window.innerHeight - 90}px;

  .buttons {
    a.returnToHomeBtn {
      display: ${(props) => (props.returnToHomeBtn ? "flex" : "none")};
    }
    a.BrowseProductsBtn {
      display: ${(props) => (props.BrowseProductsBtn ? "flex" : "none")};
    }
    a.goToContactsBtn {
      display: ${(props) => (props.goToContactsBtn ? "flex" : "none")};
    }
    a.checkServicesBtn {
      display: ${(props) => (props.checkServicesBtn ? "flex" : "none")};
    }
  }
`;
