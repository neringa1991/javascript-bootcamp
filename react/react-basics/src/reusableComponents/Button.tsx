import React from "react";
interface Buttonprops {
  icon: string;
  text: string;
  buttonColor?: "green" | "red" | "gray";
}
function Button({icon, text, buttonColor}: Buttonprops) {
  return (
    <button
      className="Button"
      style={
        buttonColor ? {backgroundColor: buttonColor} : {backgroundColor: "gray"}
      }
    >
      {text} <img className="ButtonIcon" src={icon} alt=""></img>
    </button>
  );
}

export default Button;
