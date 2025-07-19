import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TaskFilter } from "../../../contexts";
import { ButtonGroup } from "../ButtonGroup";
import { MockTasksProvider } from "../../../__mocks__/useTasksContextMock";

describe("ButtonGroup", () => {
  it("renders filter buttons and calls setFilter when clicked", () => {
    const setFilterMock = vi.fn();

    render(
      <MockTasksProvider
        value={{ filter: TaskFilter.ALL, setFilter: setFilterMock }}
      >
        <ButtonGroup componentName="TestGroup" />
      </MockTasksProvider>,
    );

    const allBtn = screen.getByRole("button", { name: /All/i });
    const completedBtn = screen.getByRole("button", { name: /Completed/i });
    const pendingBtn = screen.getByRole("button", { name: /Pending/i });

    expect(allBtn).toBeInTheDocument();
    expect(completedBtn).toBeInTheDocument();
    expect(pendingBtn).toBeInTheDocument();

    fireEvent.click(completedBtn);
    expect(setFilterMock).toHaveBeenCalledWith(TaskFilter.COMPLETED);

    fireEvent.click(pendingBtn);
    expect(setFilterMock).toHaveBeenCalledWith(TaskFilter.PENDING);
  });
});
