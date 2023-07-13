import React from "react";
import "./ToDoItem.css";
interface ToDoItemProps {
  item: any;
  onToggleItem: any;
}
const ToDoItem = ({item, onToggleItem}: ToDoItemProps) => {
  return (
    <li className="ToDoItem">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.completed ? {textDecoration: "line-through"} : {}}>
        {item.description}
      </span>
    </li>
  );
};

export default ToDoItem;
