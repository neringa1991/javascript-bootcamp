import React from "react";
import Cart from "../../components/cart/Cart";
import Topbar from "../../components/topbar/Topbar";
import "./HomePage.css";
// RULE2: PAGE SHOULD RETURN ONLY COMPONENTS
function HomePage() {
  return (
    <div>
      <Topbar />
      <Cart />
    </div>
  );
}

export default HomePage;
