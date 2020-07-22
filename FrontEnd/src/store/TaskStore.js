import { decorate, observable } from "mobx";
import axios from "axios";



class TaskStore {
  tasks = [];

  fetchList = async () => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      this.tasks = res.data;
    } catch (error) {
      console.error("Error")
    }
  }

  createTask = async (newTask) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      this.tasks.push(res.data);
      console.log(this.tasks);
    } catch (error) { console.log("Error", error) }
  };

  updateTask = async (updatedTask) => {
    try {
      await axios.put(`http://localhost:8000/tasks/${updatedTask.id}`);
      const task = this.tasks.find((task) => task.id === updatedTask.id);
      task.done = !task.done;
    } catch (error) {
      console.log("Error", error);
    }
  };
  deleteTask = async (taskId) => {
    await axios.delete(`http://localhost:8000/tasks/${taskId}`);
    this.tasks = this.tasks.filter((task) => task.id !== +taskId);
  };
}


decorate(TaskStore, {
  tasks: observable,
});

const taskStore = new TaskStore();
taskStore.fetchList();

export default taskStore;
