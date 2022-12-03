import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import projectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  projects: projectsReducer
});

export const store = createStore(rootReducer, composeWithDevTools());