import {
  createContext,
  useContext,
  type ReactNode,
  useMemo,
  useState,
} from "react";
import { useTasks } from "../hooks/useTasks";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export enum TaskFilter {
  ALL = "all",
  COMPLETED = "completed",
  PENDING = "pending",
}

interface TasksContextValue {
  filteredTasks: Task[];

  loading: boolean;
  error: string | null;
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;

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

  const [filter, setFilter] = useState<TaskFilter>(TaskFilter.ALL);

  const filteredTasks = useMemo(() => {
    if (filter === TaskFilter.COMPLETED) return tasks.filter(t => t.completed);
    if (filter === TaskFilter.PENDING) return tasks.filter(t => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const value = useMemo(
    () => ({
      filteredTasks,

      loading,
      error,

      filter,
      setFilter,

      addTask,
      editTask,
      toggleComplete,
      removeTask,
      reload,
    }),
    [
      filteredTasks,
      loading,
      error,
      filter,
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
