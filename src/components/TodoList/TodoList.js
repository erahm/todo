import React from "react";
import ListItem from "../ListItem";
import "./todo-list.scss";

const fakeData = [
  {
    id: 1,
    task: "do some stuff",
    complete: false,
    dueDate: null
  },
  {
    id: 2,
    task: "do some other stuff",
    complete: true,
    dueDate: null
  }
];

export default () => {

  const renderItems = (items) => {
    return items.map((item) => {
      return <ListItem key={`item-${item.id}`} {...item} />
    })
  }

  return (
    <div className="app-wrapper">
      <ul>
        { renderItems(fakeData) }
      </ul>
    </div>
  )
}