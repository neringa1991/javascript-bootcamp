import "./Button.css";
interface Buttonprops {
  icon?: string;
  text: string;
  buttonColor?: "green" | "red" | "gray";
}
function Button({icon, text, buttonColor}: Buttonprops) {
  return (
    <button
      className="SharedButton"
      style={
        buttonColor ? {backgroundColor: buttonColor} : {backgroundColor: "pink"}
      }
    >
      {/* only if there's an icon, only then show the image */}
      {text} {icon && <img className="ButtonIcon" src={icon} alt=""></img>}
    </button>
  );
}

export default Button;
