export default class LocalStorage {
  static getProjects = () => {
    return localStorage.getItem("projects");
  }

  static setProjects = (projects) => {
    localStorage.setItem("projects", projects);
  }
}