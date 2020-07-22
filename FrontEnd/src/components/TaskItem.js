import React from "react";
import taskStore from "../store/TaskStore";

// libray
import { observer } from "mobx-react";

import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

const TaskItem = ({ task }) => {
  return (

    <li className="list-group-item">
      <h3>{task.task}</h3>
      <p>{task.description}</p>
      <date>{task.date}</date>
      <div>
        <DeleteButton task={task} deleteTask={taskStore.deleteTask} />
        <UpdateButton task={task} updateTask={taskStore.updateTask} />
      </div>
    </li>

  );
};

export default observer(TaskItem);
