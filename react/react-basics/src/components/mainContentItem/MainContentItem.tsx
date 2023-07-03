import React from "react";
import "./MainContentItem.css";

// provides the type for component
interface MainContentItemProps {
  title: string;
  text: string;
  image: string;
}

function MainContentItem({title, text, image}: MainContentItemProps) {
  return (
    <div className="MainContentITEM">
      <h1>{title}</h1>
      <p>{text}</p>
      <img src="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*"></img>
      <button>DONATE</button>
    </div>
  );
}

export default MainContentItem;
