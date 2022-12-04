export default class LocalStorage {
  static getProjects = () => {
    return JSON.parse(localStorage.getItem("projects"));
  }

  static setProjects = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}