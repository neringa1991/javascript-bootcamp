import "./ToDoList.css";
import ToDoItem from "../toDoItem/ToDoItem.tsx";
import React from "react";

interface ToDoListProps {
  items: [];
  onToggleItem: any;
  onClearList: any;
}
export const ToDoList = ({items, onToggleItem, onClearList}: ToDoListProps) => {
  // const initialItems = [
  //   {
  //     id: 1,
  //     description: "Make dinner",
  //     added: false,
  //   },
  //   {
  //     id: 2,
  //     description: "Swimming class",
  //     completed: true,
  //   },
  // ];
  return (
    <div className="ToDoList">
      <ul>
        {items.map((item) => (
          <ToDoItem item={item} key={item.id} onToggleItem={onToggleItem} />
        ))}
      </ul>
      <button onClick={onClearList}>Clear list</button>
    </div>
  );
};
export default ToDoList;
