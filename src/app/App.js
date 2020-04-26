// BASIC IMPORTS::==>
import React from "react";
import "./App.css";

// PAGES IMPORTS::==>
import NotFoundPage from "./views/notFoundPage/404.page";
import HomePage from "./views/homePage/Home.page";
// COMPONENTS IMPORTS::==>

// UTILITIES IMPORTS::==>
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// COMPONENT IMPORTS::==>
function App() {
  return (
    <div className="App">
      <HomePage />
      <NotFoundPage />
      hello react project
    </div>
  );
}

export default App;
