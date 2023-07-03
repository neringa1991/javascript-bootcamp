import React from "react";
import "./MainContent.css";
import MainContentItem from "../mainContentItem/MainContentItem";

function MainContent() {
  return (
    <div className="MainContent">
      <MainContentItem title="Cool cat" text="jdfkfkll" />
      <MainContentItem title="Oreo" text="kllaleokmd,sl" />
      <MainContentItem />
    </div>
  );
}

export default MainContent;
