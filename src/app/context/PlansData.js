// BASIC IMPORTS::==>
import React from "react";

// UTILITIES IMPORTS::==>
import { AiFillThunderbolt, AiFillHdd, AiFillApi } from "react-icons/ai";

const plansData = [
  {
    id: 0,
    icon: <AiFillThunderbolt />,
    planeName: "ultimate",
    featuresList: [
      "featureIndex: bar",
      "featureOne: bar",
      "featureTwo: bar",
      "featureThree: bar",
      "featureFour: bar",
    ],
    role: "yearly",
    planeCost: "$ 212",
  },
  {
    id: 1,
    icon: <AiFillHdd />,
    planeName: "educational",
    featuresList: [
      "featureIndex: bar",
      "featureOne: bar",
      "featureTwo: bar",
      "featureThree: bar",
      "featureFour: bar",
    ],
    role: "yearly",
    planeCost: "$ 150",
  },
  {
    id: 2,
    icon: <AiFillApi />,
    planeName: "basic",
    featuresList: [
      "featureIndex: bar",
      "featureOne: bar",
      "featureTwo: bar",
      "featureThree: bar",
      "featureFour: bar",
    ],
    role: "monthly",
    planeCost: "$ 75",
  },
];

export default plansData;
