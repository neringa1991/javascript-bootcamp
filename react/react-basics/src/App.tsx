// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

import Footer from "./components/footer/Footer";
import MainContent from "./components/maincontent/MainContent";
import Topbar from "./components/topbar/Topbar";

function App() {
  //react allows to return only 1 parent element
  return (
    // this is a fragment, <div> without letters. Allows to return the same elements more than once
    <>
      <Topbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
