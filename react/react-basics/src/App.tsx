// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

import Footer from "./components/footer/Footer";
import MainContent from "./components/maincontent/MainContent";
import Topbar from "./components/topbar/Topbar";
import Cart from "./components/cart/Cart";
import HomePage from "./pages/homepage/HomePage";
// RULE 1: YOU HAVE TO HAVE PAGES NOT COMPONENENTS IN THIS FILE

function App() {
  //react allows to return only 1 parent element
  return (
    // this is a fragment, <div> without letters. Allows to return the same elements more than once
    <>
      <HomePage />
      {/* <Topbar />
      <MainContent />
      <Footer />
      <Cart /> */}
    </>
  );
}

export default App;
