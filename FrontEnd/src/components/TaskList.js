import React from "react";
// data
import taskStore from "../store/TaskStore";

// libray
import { observer } from "mobx-react";
//component
import TaskItem from "./TaskItem";
import AddButton from "./buttons/AddButton";

const TaskList = () => {
  const taskList = taskStore.tasks
    .filter(
      (task) =>
        task.done === false
    )
    .map((task) => <TaskItem task={task} key={task.id} />);

  const doneList = taskStore.tasks
    .filter(
      (task) =>
        task.done === true
    )
    .map((task) => <TaskItem task={task} key={task.name} />);

  return (
    <div className="container">
      <div align="center">
        <AddButton />
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="list-group col-lg-6 col-md-6 col-sm-12">
            <h5 className="list-group-item active">
              {taskList.length ? "ToDo" : "Nothing to do"}
              <span className="badge badge-dark badge-pill">
                {taskList.length}
              </span>
            </h5>
            {taskList}
          </div>
          <div className="list-group col-lg-6 col-md-6 col-sm-12">
            <h5 className="list-group-item active">
              {doneList.length ? "Done" : "Everything is Done"}
              <span className="badge badge-dark badge-pill">
                {doneList.length}
              </span>
            </h5>
            {doneList}
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(TaskList);
