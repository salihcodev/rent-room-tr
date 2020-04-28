// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import CompanyPhilosophy from "../../components/philosophy/CompanyPhilosophy.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Home.page.style.scss";
import HeaderImg from "../../assets/imgs/defaultBcg.jpeg";
const HomePage = () => {
  // home required data:
  // header:
  const headerTitle = "Let us give you a nice bed!";

  // about section:
  const aboutTitle = "hello from about company";
  const aboutText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus sapiente qui modi perferendis dicta, earum accusantium quis aliquid! Voluptatibus aliquid ducimus dolorum nesciunt repudiandae quibusdam eius debitis quos explicabo!";

  return (
    <>
      <Header
        img={HeaderImg}
        title={headerTitle}
        btn1="return to home"
        btn2="browse rooms"
      ></Header>

      <CompanyPhilosophy aboutTitle={aboutTitle} aboutContext={aboutText} />
    </>
  );
};

export default HomePage;
