import LocalStorage from "../utils/LocalStorage";

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

const defaultState = LocalStorage.getTasks() ?? { items: [] };

export default function tasksReducer(state = defaultState, action) {
  let newState = {};

  switch (action.type) {
    case ADD_TASK:
      newState.items = [...state.items, action.payload];
      LocalStorage.setTasks(newState);
      return newState;
    case REMOVE_TASK:
      newState.items = state.items.filter(item => item.id !== action.payload);
      LocalStorage.setTasks(newState);
      return newState;
    case UPDATE_TASK:
      newState.items = [...state.items];
      newState[newState.indexOf(item => item.id === action.payload.id)] = action.payload;
      LocalStorage.setTasks(newState);
      return newState;
    default:
      return state;
  }
};

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const removeTask = (taskId) => ({ type: REMOVE_TASK, payload: taskId });
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task });

export const selectTasks = (state) => state.tasks;