// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import Header from "../../components/header/Header.component";
import CompanyPhilosophy from "../../components/philosophy/CompanyPhilosophy.component";
import PlansWrapper from "../../components/plans/PlansWrapper.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
import "./Home.page.style.scss";
import HeaderImg from "../../assets/imgs/defaultBcg.jpeg";
const HomePage = () => {
  // home required data:
  // header:
  const HeaderTitle = "Let us give you a nice bed!";

  // about section:
  const AboutTitle = "hello from about company";
  const AboutText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repellendus sapiente qui modi perferendis dicta, earum accusantium quis aliquid! Voluptatibus aliquid ducimus dolorum nesciunt repudiandae quibusdam eius debitis quos explicabo!";
  const plansData = [
    {
      id: 0,
      planeName: "ultimate",
      featuresList: [
        "featureIndex: bar",
        "featureOne: bar",
        "featureTwo: bar",
        "featureThree: bar",
        "featureFour: bar",
        "featureFive: bar",
        "featureSix: bar",
        "featureSeven: bar",
      ],
      ship: "ship Now",
      planeCost: "$ 212",
    },
    {
      id: 1,
      planeName: "educational",
      featuresList: [
        "featureIndex: bar",
        "featureOne: bar",
        "featureTwo: bar",
        "featureThree: bar",
        "featureFour: bar",
        "featureFive: bar",
        "featureSix: bar",
        "featureSeven: bar",
      ],
      ship: "ship Now",
      planeCost: "$ 150",
    },
    {
      id: 2,
      planeName: "basic",
      featuresList: [
        "featureIndex: bar",
        "featureOne: bar",
        "featureTwo: bar",
        "featureThree: bar",
        "featureFour: bar",
        "featureFive: bar",
        "featureSix: bar",
        "featureSeven: bar",
      ],
      ship: "ship Now",
      planeCost: "$ 75",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <Header
        img={HeaderImg}
        title={HeaderTitle}
        btn1="return to home"
        btn2="browse rooms"
      ></Header>

      {/* ABOUT THE COMPANY */}
      <CompanyPhilosophy aboutTitle={AboutTitle} aboutContext={AboutText} />

      {/* PLANS */}
      <PlansWrapper plansData={plansData} />
    </>
  );
};

export default HomePage;
