import "./Button.css";
import React, {SetStateAction} from "react";
interface Buttonprops {
  icon?: string;
  text: string;
  buttonColor?: "red" | "gray";
  buttonText?: "green" | "red" | "gray";
  // function which does not return anything
  setItem: React.Dispatch<SetStateAction<string>>;
  id: string;
}
function Button({
  icon,
  text,
  buttonColor,
  buttonText,
  setItem,
  id,
}: Buttonprops) {
  const buttonStyle = {
    backgroundColor: buttonColor,
    color: buttonText,
  };
  const buttonStyleState = () => {
    if (buttonColor && buttonText) {
      return buttonStyle;
    }

    if (buttonColor) {
      return {backgroundColor: buttonColor};
    }
    if (buttonText) {
      return {color: buttonText};
    }
  };

  return (
    <button
      onClick={() => setItem(id)}
      className="SharedButton"
      // style={
      //   buttonColor ? {backgroundColor: buttonColor} : {backgroundColor: "pink"}
      // }
      style={buttonStyleState()}
    >
      {/* only if there's an icon, only then show the image */}
      {text} {icon && <img className="ButtonIcon" src={icon} alt=""></img>}
    </button>
  );
}

export default Button;
