export default class LocalStorage {
  static getProjects = () => {
    return JSON.parse(localStorage.getItem("projects"));
  }

  static setProjects = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static getTasks = () => {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  static setTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}