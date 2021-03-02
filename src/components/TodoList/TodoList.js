import React from "react";
import ListItem from "../ListItem";
import "./todo-list.scss";

const fakeData = {
  id: 1,
  task: "do some stuff",
  complete: false,
  dueDate: null
};

export default () => {
  return (
    <div className="app-wrapper">
      <ul>
        <ListItem {...fakeData} />
      </ul>
    </div>
  )
}