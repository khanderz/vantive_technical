import type { Task } from "../contexts";
import { apiClient } from "./apiClient";

const TASKS_ENDPOINT = "/todos";

export const fetchTasks = async (limit = 5): Promise<Task[]> => {
  const { data } = await apiClient.get<Task[]>(
    `${TASKS_ENDPOINT}?_limit=${limit}`,
  );
  return data;
};

export const createTask = async (title: string): Promise<Task> => {
  const { data } = await apiClient.post<Task>(TASKS_ENDPOINT, {
    title,
    completed: false,
  });
  return data;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const { data } = await apiClient.patch<Task>(`${TASKS_ENDPOINT}/${task.id}`, {
    title: task.title,
    completed: task.completed,
  });
  return data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await apiClient.delete(`${TASKS_ENDPOINT}/${id}`);
};
