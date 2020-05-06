// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import ContactUs from "../../components/contact/ContactUs.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Contact.page.style.scss";
import HeaderImg from "../../assets/components/header/contact.svg";
const ContactPage = () => {
  // contact required data:
  // header:
  const HeaderTitle = "Keep in touch!";
  const HeaderDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cum aliquid odit corrupti, quos praesentium, repellat asperiores voluptate a sit vitae provident ipsa beatae quae voluptas quidem maiores deleniti delectus.a sit vitae provident ipsa beatae quae voluptas quidem maiores deleniti delectus.";

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
      <div className="container">
        {/* ContactUs */}
        <ContactUs />
      </div>
    </>
  );
};

export default ContactPage;
