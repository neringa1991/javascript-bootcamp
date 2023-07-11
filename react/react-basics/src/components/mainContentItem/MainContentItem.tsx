import React from "react";
import "./MainContentItem.css";

// @ts-ignore
import CartIcon from "../../assets/icons8-cart-50.png";

// provides the type for component
interface MainContentItemProps {
  title: string;
  text: string;
  image: string;
  // ? allows for property to be not required
  button?: string;
}

function MainContentItem({title, text, image, button}: MainContentItemProps) {
  //TRUTHY VALUES
  // 1, -1, "false", "0", "null", "undefined", [], {}, true;
  // FALSY
  // 0, "", false, udefined
  return (
    <div className="MainContent">
      <div className="content">
        <h1>{title ? title : "No title..."}</h1>
        <p>{text}</p>
        <img className="img" src={image} alt="" />
        {/* <Button></Button> */}

        <button className="Button">
          {button} <img className="ButtonIcon" src={CartIcon} alt=""></img>
        </button>
      </div>
    </div>
  );
}

export default MainContentItem;
