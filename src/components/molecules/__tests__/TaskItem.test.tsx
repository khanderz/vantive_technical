import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";
import { TaskItem } from "../TaskItem";
import { MockTasksProvider } from "../../../__mocks__/useTasksContextMock";
import { Task } from "../../../contexts";

describe("TaskItem Component", () => {
  const mockTask: Task = {
    id: 1,
    title: "Mock Task",
    completed: false,
  };

  let toggleCompleteMock: ReturnType<typeof vi.fn>;
  let editTaskMock: ReturnType<typeof vi.fn>;
  let removeTaskMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    toggleCompleteMock = vi.fn();
    editTaskMock = vi.fn();
    removeTaskMock = vi.fn();
  });

  const renderTaskItem = (task: Task = mockTask) =>
    render(
      <MockTasksProvider
        value={{
          toggleComplete: toggleCompleteMock,
          editTask: editTaskMock,
          removeTask: removeTaskMock,
        }}
      >
        <TaskItem componentName="TestTaskItem" task={task} />
      </MockTasksProvider>,
    );

  it("renders the task title", () => {
    renderTaskItem();
    expect(screen.getByText("Mock Task")).toBeInTheDocument();
  });

  it("calls toggleComplete when checkbox is clicked", () => {
    renderTaskItem();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(toggleCompleteMock).toHaveBeenCalledWith(1);
  });

  it("calls editTask with new title after prompt", () => {
    const newTitle = "Updated Task";
    vi.spyOn(window, "prompt").mockReturnValue(newTitle);

    renderTaskItem();
    const editButton =
      screen.getByTestId("TestTaskItem-edit-task-IconButton") ||
      screen.getByRole("button", { name: /edit/i });

    fireEvent.click(editButton);
    expect(editTaskMock).toHaveBeenCalledWith(1, newTitle);

    vi.restoreAllMocks();
  });

  it("does not call editTask if prompt is cancelled", () => {
    vi.spyOn(window, "prompt").mockReturnValue(null);

    renderTaskItem();
    const editButton = screen.getByRole("button", { name: /edit/i });

    fireEvent.click(editButton);
    expect(editTaskMock).not.toHaveBeenCalled();

    vi.restoreAllMocks();
  });

  it("calls removeTask after confirm", () => {
    vi.spyOn(window, "confirm").mockReturnValue(true);

    renderTaskItem();
    const deleteButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(deleteButton);

    expect(removeTaskMock).toHaveBeenCalledWith(1);

    vi.restoreAllMocks();
  });

  it("does not call removeTask if confirm is cancelled", () => {
    vi.spyOn(window, "confirm").mockReturnValue(false);

    renderTaskItem();
    const deleteButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(deleteButton);

    expect(removeTaskMock).not.toHaveBeenCalled();

    vi.restoreAllMocks();
  });
});
