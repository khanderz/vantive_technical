import { createContext, useContext, type ReactNode, useMemo } from "react";
import { useTasks } from "../hooks/useTasks";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TasksContextValue {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (title: Task["title"]) => Promise<void> | void;
  editTask: (id: Task["id"], title: Task["title"]) => Promise<void> | void;
  toggleComplete: (id: Task["id"]) => Promise<void> | void;
  removeTask: (id: Task["id"]) => Promise<void> | void;
  reload: () => Promise<void> | void;
}

const TasksContext = createContext<TasksContextValue | undefined>(undefined);

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const {
    tasks,
    loading,
    error,
    addTask,
    editTask,
    toggleComplete,
    removeTask,
    reload,
  } = useTasks(5);

  const value = useMemo(
    () => ({
      tasks,
      loading,
      error,
      addTask,
      editTask,
      toggleComplete,
      removeTask,
      reload,
    }),
    [
      tasks,
      loading,
      error,
      addTask,
      editTask,
      toggleComplete,
      removeTask,
      reload,
    ],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export const useTasksContext = (): TasksContextValue => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }
  return context;
};
