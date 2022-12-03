import LocalStorage from "../utils/LocalStorage";

const ADD_PROJECT = "ADD_PROJECT";
const REMOVE_PROJECT = "REMOVE_PROJECT";

const defaultState = { items: LocalStorage.getProjects() ?? [] };

export default function projectsReducer(state = defaultState, action) {
  let newState = {};

  switch (action.type) {
    case ADD_PROJECT:
      newState.items = [...state.items, action.payload];
      return newState;
    case REMOVE_PROJECT:
      newState.items = state.items.filter(item => item.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

export const addProject = (project) => ({ type: ADD_PROJECT, payload: project });
export const removeProject = (projectId) => ({ type: REMOVE_PROJECT, payload: projectId });

export const selectProjects = (state) => state.projects;