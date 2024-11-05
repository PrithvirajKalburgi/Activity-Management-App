import React, { useState, useEffect } from "react";
import TaskElement from "../Components/TaskElement";

function TasksView() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/tasks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was no ok");
        }
        return response.json();
      })

      .then((data) => {
    const formattedTasks = data.map(task => ({
      ...task,
      tags: task.tags.split(",").map(tag => tag.trim())
    }));
    setTasks(formattedTasks);
  })
      .catch((error) => console.error("Error fetching tasks: ", error));
  }, []);

  return (
    <div className="tasks-view">
      <h2>Tasks</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskElement key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksView;
