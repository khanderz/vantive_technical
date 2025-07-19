import { ReactNode } from "react";
import { vi } from "vitest";
import { Task, TasksContext, TaskFilter } from "../contexts";

const defaultMockTasks: Task[] = [
  { id: 1, title: "Mock Task 1", completed: false },
  { id: 2, title: "Mock Task 2", completed: true },
];

export const mockTasksContextValue: React.ContextType<typeof TasksContext> = {
  filteredTasks: defaultMockTasks,
  filter: TaskFilter.ALL,
  setFilter: vi.fn(),
  loading: false,
  error: null,
  addTask: vi.fn(),
  editTask: vi.fn(),
  toggleComplete: vi.fn(),
  removeTask: vi.fn(),
  reload: vi.fn(),
};

export const MockTasksProvider = ({
  children,
  value = {},
}: {
  children: ReactNode;
  value?: Partial<typeof mockTasksContextValue>;
}) => {
  const mergedValue = { ...mockTasksContextValue, ...value };

  return (
    <TasksContext.Provider value={mergedValue}>
      {children}
    </TasksContext.Provider>
  );
};
