import { useState, useEffect, useCallback, useReducer } from "react";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskApi";
import type { Task } from "../contexts";
import { tasksReducer } from "../reducers";

export const useTasks = (initialLimit = 5) => {
  const initialTasks: Task[] = [];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const apiTasks = await fetchTasks(initialLimit);
      dispatch({ type: "SET_TASKS", tasks: apiTasks });
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
      setError("Failed to fetch tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [initialLimit]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const addTask = async (title: Task["title"]) => {
    const tempTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    dispatch({ type: "ADD_TASK", task: tempTask });

    try {
      const newTask = await createTask(title);

      dispatch({
        type: "UPDATE_TASK",
        id: tempTask.id,
        task: { ...newTask, id: tempTask.id },
      });
    } catch (err) {
      console.error("Failed to save task:", err);
      setError("Failed to add task.");
      dispatch({ type: "REMOVE_TASK", id: tempTask.id });
    }
  };

  const editTask = async (id: Task["id"], title: Task["title"]) => {
    const oldTasks = [...tasks];

    dispatch({ type: "UPDATE_TASK", id, task: { title } });

    try {
      const taskToUpdate = tasks.find(t => t.id === id);
      if (taskToUpdate) {
        await updateTask({ ...taskToUpdate, title });
      }
    } catch (err) {
      console.error(`Failed to update task ${id}:`, err);
      setError("Failed to update task.");

      dispatch({ type: "SET_TASKS", tasks: oldTasks });
    }
  };

  const toggleComplete = async (id: Task["id"]) => {
    const oldTasks = [...tasks];

    const toggled = tasks.find(t => t.id === id);

    dispatch({
      type: "UPDATE_TASK",
      id,
      task: { completed: toggled ? !toggled.completed : false },
    });

    try {
      if (toggled) {
        await updateTask({
          ...toggled,
          completed: !toggled.completed,
        });
      }
    } catch (err) {
      console.error(`Failed to toggle task ${id}:`, err);
      setError("Failed to toggle task completion.");

      dispatch({ type: "SET_TASKS", tasks: oldTasks });
    }
  };

  const removeTask = async (id: Task["id"]) => {
    const oldTasks = [...tasks];

    dispatch({ type: "REMOVE_TASK", id });

    try {
      await deleteTask(id);
    } catch (err) {
      console.error("Failed to delete task", err);
      setError("Failed to delete task.");

      dispatch({ type: "SET_TASKS", tasks: oldTasks });
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    editTask,
    toggleComplete,
    removeTask,
    reload: loadTasks,
  };
};
