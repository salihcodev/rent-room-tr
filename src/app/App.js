// BASIC IMPORTS::==>
import React from "react";
import "./App.scss";

// PAGES IMPORTS::==>
import NotFoundPage from "./views/notFoundPage/404.page";
import HomePage from "./views/homePage/Home.page";
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
        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/prices">{/* <Pricing /> */}</Route>

        <Route path="/services">{/* <Services /> */}</Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
