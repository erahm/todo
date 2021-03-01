import React from "react";
import ListItem from "./components/ListItem";
import "./app.scss";

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