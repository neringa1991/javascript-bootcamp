import React from "react";
import "./MainContent.css";
import MainContentItem from "../mainContentItem/MainContentItem";

function MainContent() {
  return (
    <div>
      <div className="MainContent">
        <MainContentItem
          title="Cool cat"
          text="jdfkfkll"
          image="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*"
          button="Buy now"
        />
        <MainContentItem
          title="Oreo"
          text="kllaleokmd,sl"
          image="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*"
          button="Buy now"
        />
        <MainContentItem
          title="Oreo"
          text="kllaleokmd,sl"
          image="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*"
          button="Buy now"
        />
      </div>
    </div>
  );
}

export default MainContent;
