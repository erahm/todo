import React, { useState } from "react";
import "./list-item.scss";

export default (props) => {
  const {id, task, complete, dueDate} = props;

  const [checked, setChecked] = useState(complete);

  const handleChange = (event) => {
    const target = event.currentTarget;


    if (target.checked) {
      setChecked(true)
    }
    else {
      setChecked(false)
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        key={`task-${id}`}
        name={`task-${id}`}
        onChange={(event) => handleChange(event)}
        checked={ checked ? "checked" : ""}
      />
      <span>{ task }</span>
      <span>{ dueDate }</span>
    </li>
  )
}