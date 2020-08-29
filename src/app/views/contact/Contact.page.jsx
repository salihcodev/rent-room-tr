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


  return (
    <>
      {/* HEADER */}
      <Header
        img={HeaderImg}
        title={HeaderTitle}
        returnToHomeBtn="return to home"
      >
      </Header>
      <div className="container">
        {/* ContactUs */}
        <ContactUs />
      </div>
    </>
  );
};

export default ContactPage;
