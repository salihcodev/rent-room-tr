// BASIC IMPORTS::==>
import React from "react";
import "./App.scss";

// PAGES IMPORTS::==>
import NotFoundPage from "./views/notFoundPage/404.page";
import HomePage from "./views/homePage/Home.page";
import ServicesPage from "./views/services/Services.page";
import PricingPage from "./views/pricing/Pricing.page";
import SingleRoom from "./views/singleRoom/SingleRoom.page";
import ContactPage from "./views/contact/Contact.page";
import RoomsPage from "./views/rooms/Rooms.page";

// COMPONENTS IMPORTS::==>
import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";

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

        <Route exact path="/contact">
          <ContactPage />
        </Route>

        <Route exact path="/pricing">
          <PricingPage />
        </Route>

        <Route exact path="/rooms">
          <RoomsPage />
        </Route>

        <Route exact path="/rooms/:singleRoom">
          <SingleRoom />
        </Route>

        <Route exact path="/services">
          <ServicesPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
