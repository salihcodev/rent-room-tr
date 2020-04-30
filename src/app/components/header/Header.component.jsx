// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import { Link } from "react-router-dom";
import styled from "styled-components";

// COMPONENT IMPORTS::==>
import "./Header.component.style.scss";
const Header = ({ img, title, btn1, btn2, children }) => {
  return (
    <MainHeader img={img ? img : null} className="mainHeader">
      <div className="container">
        <h2 className="headerHeading">{title}</h2>
        <div className="headerBody">
          <div className="headerContentWrapper">{children}</div>
        </div>
        <div className="buttons">
          <div className="headerBtnsWrapper">
            <button className="btn btn-warning">{btn1}</button>
            <button className="btn btn-info">{btn2}</button>
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
`;
