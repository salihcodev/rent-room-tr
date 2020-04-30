// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import ContactUs from "../../components/contact/ContactUs.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Contact.page.style.scss";
import HeaderImg from "../../assets/header/3198776.svg";
const ContactPage = () => {
  // services required data:
  // header:
  const HeaderTitle = "Keep in touch!";
  const HeaderDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cum aliquid odit corrupti, quos praesentium, repellat asperiores voluptate a sit vitae provident ipsa beatae quae voluptas quidem maiores deleniti delectus.a sit vitae provident ipsa beatae quae voluptas quidem maiores deleniti delectus.";

  // about

  return (
    <>
      {/* HEADER */}
      <Header
        img={HeaderImg}
        title={HeaderTitle}
        btn1="return to home"
        btn2="browse rooms"
      >
        {HeaderDescription}
      </Header>

      {/* ContactUs */}
      <ContactUs />
    </>
  );
};

export default ContactPage;
