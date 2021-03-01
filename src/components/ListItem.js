import React, { useState } from "react";
import "./list-item.scss";

export default (props) => {
  const {id, task, complete, dueDate} = props;

  console.log("props", props);

  return (
    <li>
      <input type="checkbox" key={`task-${id}`} name={`task-${id}`} checked={ complete ? checked : ""} />
      <span>{ task }</span>
      <span>{ dueDate }</span>
    </li>
  )
}