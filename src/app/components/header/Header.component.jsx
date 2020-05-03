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
        <h2 className="headerHeading">{title}</h2>
        <div className="headerBody">
          <div className="headerContentWrapper">{children}</div>
        </div>
        <div className="buttons">
          <div className="headerBtnsWrapper">
            <button className="btn returnToHomeBtn btn-warning">
              <Link to="/">
                <span className="btnIcon">
                  <TiArrowBackOutline />
                </span>
                <span className="btnContext">{returnToHomeBtn}</span>
                <span className="arrow"></span>
              </Link>
            </button>

            <button className="btn BrowseProductsBtn btn-light">
              <Link to="pricing">
                <span className="btnIcon">
                  <RiProfileLine />
                </span>
                <span className="btnContext">{BrowseProductsBtn}</span>
                <span className="arrow"></span>
              </Link>
            </button>

            <button className="btn goToContactsBtn btn-dark">
              <Link to="contact">
                <span className="btnIcon">
                  <TiContacts />
                </span>
                <span className="btnContext">{goToContactsBtn}</span>
                <span className="arrow"></span>
              </Link>
            </button>

            <button className="btn checkServicesBtn btn-primary">
              <Link to="services">
                <span className="btnIcon">
                  <TiChartBarOutline />
                </span>
                <span className="btnContext">{checkServicesBtn}</span>
                <span className="arrow"></span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </MainHeader>
  );
};

export default Header;
// i used styled component just for get benefit of using props inside <style>.
const MainHeader = styled.header`
  background: linear-gradient(90deg, #18b08d3d, #19467fe0),
    url(${(props) => props.img}) center/cover;

  .buttons {
    button.returnToHomeBtn {
      display: ${(props) => (props.returnToHomeBtn ? "inline-block" : "none")};
    }
    button.BrowseProductsBtn {
      display: ${(props) =>
        props.BrowseProductsBtn ? "inline-block" : "none"};
    }
    button.goToContactsBtn {
      display: ${(props) => (props.goToContactsBtn ? "inline-block" : "none")};
    }
    button.checkPlansBtn {
      display: ${(props) => (props.checkPlansBtn ? "inline-block" : "none")};
    }
  }
`;
