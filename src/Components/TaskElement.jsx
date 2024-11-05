import React from "react";
import "../Styling/TaskElement.css";

function TaskElement({ task }) {
  return (
    <div className="task-element">
      <h3>{task.name}</h3>
      <p>Tags: {task.tags.join(", ") || "No tags avaliable"}</p>
    </div>
  );
}

export default TaskElement;
