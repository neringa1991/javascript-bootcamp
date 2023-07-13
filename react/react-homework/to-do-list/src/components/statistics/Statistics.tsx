import React from "react";
import "./Statistics.css";

export const Statistics = ({items}) => {
  const activeItems = items.filter((item) => !item.completed);
  const numItems = activeItems.length;

  return (
    <footer className="Statistics">
      <em>
        {/* we enter js mode */}
        {numItems > 0
          ? `📑You have ${numItems} remaining items on your To Do List`
          : "You completed everything! "}
      </em>
    </footer>
  );
};
export default Statistics;
