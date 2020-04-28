// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import HeaderImg from "../../assets/imgs/defaultBcg.jpeg";
const HomePage = () => {
  const title = "Let us give you a nice bed!";
  return (
    <>
      <Header
        img={HeaderImg}
        title={title}
        btn1="return to home"
        btn2="browse rooms"
      >
        <p>this is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, veniam. children</p>
      </Header>
      <p>Home</p>
    </>
  );
};

export default HomePage;
