import React from "react";

import taskStore from "../../store/TaskStore";

const DeleteButton = ({ task }) => {
  return (
    <button
      type="button"
      class="btn btn-danger btn-sm float-right "
      onClick={() => taskStore.deleteTask(task.id)}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
