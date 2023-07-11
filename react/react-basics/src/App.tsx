// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/homepage/HomePage";
import {LoginPage} from "./pages/loginPage/LoginPage";

// RULE 1: YOU HAVE TO HAVE PAGES NOT COMPONENENTS IN THIS FILE
function App() {
  //react allows to return only 1 parent element
  return (
    // this is a fragment, <div> without letters. Allows to return the same elements more than once
    <>
      {/* we can have Topbar here if it will be used in all the pages */}

      <HomePage />
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
