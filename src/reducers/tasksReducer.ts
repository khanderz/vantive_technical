import type { Task } from "../contexts";

export type TaskAction =
  | { type: "SET_TASKS"; tasks: Task[] }
  | { type: "ADD_TASK"; task: Task }
  | { type: "UPDATE_TASK"; id: Task["id"]; task: Partial<Task> }
  | { type: "REMOVE_TASK"; id: Task["id"] };

export const tasksReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "SET_TASKS":
      return action.tasks;

    case "ADD_TASK":
      return [...state, action.task];

    case "UPDATE_TASK":
      return state.map(task =>
        task.id === action.id ? { ...task, ...action.task } : task,
      );

    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.id);

    default:
      return state;
  }
};
