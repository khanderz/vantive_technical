import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Home } from "../Home";
import { MockTasksProvider } from "../../__mocks__/useTasksContextMock";

describe("Home Component", () => {
  const renderHome = (customValue = {}) => {
    return render(
      <MockTasksProvider value={customValue}>
        <Home />
      </MockTasksProvider>,
    );
  };

  it("renders header and TaskInput correctly", () => {
    renderHome();

    expect(screen.getByTestId("Home-Header-Typography")).toHaveTextContent(
      "Task Manager",
    );

    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
  });

  it("shows an error message when error is present", () => {
    renderHome({ error: "Something went wrong" });

    expect(screen.getByTestId("Home-error-Typography")).toHaveTextContent(
      "Something went wrong",
    );
  });

  it("shows loading text when loading is true", () => {
    renderHome({ loading: true });

    expect(screen.getByTestId("Home-loading-Typography")).toHaveTextContent(
      "Loading tasks...",
    );
  });

  it("renders a list of filtered tasks", () => {
    renderHome();

    expect(screen.getByText("Mock Task 1")).toBeInTheDocument();
    expect(screen.getByText("Mock Task 2")).toBeInTheDocument();
  });

  it("shows fallback text if no tasks and not loading", () => {
    renderHome({ filteredTasks: [], loading: false });

    expect(screen.getByTestId("Home-no-tasks-Typography")).toHaveTextContent(
      "No tasks found for this filter.",
    );
  });
});
