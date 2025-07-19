import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LoadingButton } from "../LoadingButton";

describe("LoadingButton Component", () => {
  it("renders with the correct data-testid and default variant", () => {
    const testName = "TestLoadingButton";

    render(<LoadingButton componentName={testName}>Click Me</LoadingButton>);

    const buttonElement = screen.getByTestId(`${testName}-Loading-button`);

    expect(buttonElement).toBeInTheDocument();

    expect(screen.getByText("Click Me")).toBeInTheDocument();

    expect(buttonElement).toHaveClass("MuiButton-contained");
  });

  it("calls onClick handler when clicked", () => {
    const testName = "ClickLoadingButton";
    const handleClick = vi.fn();

    render(
      <LoadingButton componentName={testName} onClick={handleClick}>
        Click
      </LoadingButton>,
    );

    const buttonElement = screen.getByTestId(`${testName}-Loading-button`);

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders in loading state and disables the button", () => {
    const testName = "LoadingStateButton";

    render(
      <LoadingButton componentName={testName} loading>
        Loading...
      </LoadingButton>,
    );

    const buttonElement = screen.getByTestId(`${testName}-Loading-button`);

    expect(buttonElement).toBeDisabled();
  });

  it("respects custom variant prop", () => {
    const testName = "OutlinedButton";

    render(
      <LoadingButton componentName={testName} variant="outlined">
        Outlined
      </LoadingButton>,
    );

    const buttonElement = screen.getByTestId(`${testName}-Loading-button`);

    expect(buttonElement).toHaveClass("MuiButton-outlined");
  });
});
