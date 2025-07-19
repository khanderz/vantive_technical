import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MockTasksProvider } from "../../../__mocks__/useTasksContextMock";
import { TaskInput } from "../TaskInput";

describe("TaskInput Component", () => {
  it("renders input and button correctly", () => {
    render(
      <MockTasksProvider>
        <TaskInput componentName="TestTaskInput" />
      </MockTasksProvider>,
    );

    // Input and button should be rendered
    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByRole("button", { name: /Add Task/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("enables button when typing text", () => {
    render(
      <MockTasksProvider>
        <TaskInput componentName="TestTaskInput" />
      </MockTasksProvider>,
    );

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByRole("button", { name: /Add Task/i });

    fireEvent.change(input, { target: { value: "New Task" } });

    expect(button).not.toBeDisabled();
  });

  it("calls addTask and clears input after clicking Add Task", () => {
    const addTaskMock = vi.fn();

    render(
      <MockTasksProvider value={{ addTask: addTaskMock }}>
        <TaskInput componentName="TestTaskInput" />
      </MockTasksProvider>,
    );

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByRole("button", { name: /Add Task/i });

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(addTaskMock).toHaveBeenCalledWith("New Task");
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("keeps button disabled when loading is true", () => {
    render(
      <MockTasksProvider value={{ loading: true }}>
        <TaskInput componentName="TestTaskInput" />
      </MockTasksProvider>,
    );

    const button = screen.getByRole("button", { name: /Add Task/i });
    expect(button).toBeDisabled();
  });

  it("keeps button disabled when there's an error", () => {
    render(
      <MockTasksProvider value={{ error: "Something went wrong" }}>
        <TaskInput componentName="TestTaskInput" />
      </MockTasksProvider>,
    );

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByRole("button", { name: /Add Task/i });

    fireEvent.change(input, { target: { value: "Test Task" } });
    expect(button).toBeDisabled();
  });
});
