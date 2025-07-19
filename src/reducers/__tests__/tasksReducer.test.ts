import type { Task } from "../../contexts";
import { tasksReducer } from "../tasksReducer";

describe("tasksReducer", () => {
  const initialTasks: Task[] = [
    { id: 1, title: "Initial Task", completed: false },
  ];

  it("adds a new task", () => {
    const newTask: Task = { id: 2, title: "New Task", completed: false };

    const result = tasksReducer(initialTasks, {
      type: "ADD_TASK",
      task: newTask,
    });

    expect(result).toHaveLength(2);
    expect(result[1].title).toBe("New Task");
  });

  it("updates a task title", () => {
    const updated = tasksReducer(initialTasks, {
      type: "UPDATE_TASK",
      id: 1,
      task: { title: "Updated Title" },
    });

    expect(updated[0].title).toBe("Updated Title");
  });

  it("removes a task", () => {
    const result = tasksReducer(initialTasks, { type: "REMOVE_TASK", id: 1 });

    expect(result).toHaveLength(0);
  });
});
