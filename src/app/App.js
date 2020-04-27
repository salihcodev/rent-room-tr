// BASIC IMPORTS::==>
import React from "react";
import "./App.scss";

// PAGES IMPORTS::==>
import NotFoundPage from "./views/notFoundPage/404.page";
import HomePage from "./views/homePage/Home.page";
import ServicesPage from "./views/services/Services.page";
import PricingPage from "./views/pricing/Pricing.page";

// COMPONENTS IMPORTS::==>
import Navbar from "./components/navbar/Navbar.component";

// UTILITIES IMPORTS::==>
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

// COMPONENT IMPORTS::==>
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/pricing">
          <PricingPage />
        </Route>

        <Route path="/services">
          <ServicesPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
