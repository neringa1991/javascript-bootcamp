import React from "react";
// rfce shortcut
import "./Topbar.css";
import Button from "../../reusableComponents/Button";
// @ts-ignore
import CartIcon from "../../assets/icons8-cart-50.png";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div>
        <Button text="Login in" icon="" />
      </div>
    </div>
  );
};

export default Topbar;
