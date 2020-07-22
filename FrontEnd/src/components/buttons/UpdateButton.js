import React from "react";
import taskStore from "../../store/TaskStore";

const UpdateButton = ({ updateTask, task }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-info btn-sm float-right"
        onClick={() => taskStore.updateTask(task)}
      >
        {task.done ? "Not done" : "Done"}
      </button>
    </div>
  );
};
export default UpdateButton;
