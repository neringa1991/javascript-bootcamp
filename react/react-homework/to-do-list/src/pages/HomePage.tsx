// import "./App.css";
// import Form from "../components/form/Form";
// import {Logo} from "../components/logo/Logo";
// import {ToDoList} from "../components/toDoList/ToDoList";
// import Statistics from "../components/statistics/Statistics";
// import React, {useState} from "react";

const HomePage = () => {
  // const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   // we cannot use items.push()because that would modify the array. React is about immutability
  //   setItems((items) => [...items, item]);
  // }
  // function handleToggleItem(id) {
  //   setItems((items) =>
  //     items.map((item) =>
  //       item.id === id ? {...item, completed: !item.completed} : item
  //     )
  //   );
  // }
  // function handleClearList() {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete all items?"
  //   );
  //   if (confirmed) setItems([]);
  // }

  return (
    // <div className="App">
    //   <Logo />
    //   {/* we pass handleAddItems function as prop to Form */}
    //   <Form onAddItems={handleAddItems} />
    //   <ToDoList
    //     items={items}
    //     onToggleItem={handleToggleItem}
    //     onClearList={handleClearList}
    //   />
    //   <Statistics items={items} />
    // </div>
  );
};

export default HomePage;
