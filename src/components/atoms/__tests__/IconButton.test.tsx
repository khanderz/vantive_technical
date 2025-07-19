import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { IconButton } from "../IconButton";

describe("IconButton Component", () => {
  it("renders with the correct data-testid and children", () => {
    const testName = "TestButton";
    const childText = "Click Me";

    render(
      <IconButton componentName={testName}>
        <span>{childText}</span>
      </IconButton>,
    );

    const buttonElement = screen.getByTestId(`${testName}-IconButton`);
    expect(buttonElement).toBeInTheDocument();

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const testName = "ClickButton";
    const handleClick = vi.fn();

    render(
      <IconButton componentName={testName} onClick={handleClick}>
        <span>Click</span>
      </IconButton>,
    );

    const buttonElement = screen.getByTestId(`${testName}-IconButton`);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
