import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());