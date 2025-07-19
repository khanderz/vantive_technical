import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TextField } from "../Textfield";

describe("TextField Component", () => {
  it("renders with the correct data-testid and placeholder", () => {
    const testName = "TestTextField";

    render(<TextField componentName={testName} placeholder="Enter text" />);

    // Root wrapper
    const wrapper = screen.getByTestId(`${testName}-Textfield`);
    expect(wrapper).toBeInTheDocument();

    // Check the actual <input> inside MUI TextField
    const inputElement = wrapper.querySelector("input");
    expect(inputElement).toHaveAttribute("placeholder", "Enter text");
  });

  it("should use outlined variant by default", () => {
    const testName = "OutlinedTextField";

    render(<TextField componentName={testName} />);

    const textFieldElement = screen.getByTestId(`${testName}-Textfield`);

    // Outlined variant should render this class on the input wrapper
    expect(
      textFieldElement.querySelector(".MuiOutlinedInput-root"),
    ).not.toBeNull();
  });

  it("should apply fullWidth when passed", () => {
    const testName = "FullWidthTextField";

    render(<TextField componentName={testName} fullWidth />);

    const textFieldElement = screen.getByTestId(`${testName}-Textfield`);

    // Full width adds this class on the FormControl wrapper
    expect(textFieldElement).toHaveClass("MuiFormControl-fullWidth");
  });

  it("calls onChange handler when typing", () => {
    const testName = "ChangeTextField";
    const handleChange = vi.fn();

    render(
      <TextField
        componentName={testName}
        value=""
        onChange={handleChange}
        placeholder="Type something"
      />,
    );

    const input = screen.getByPlaceholderText("Type something");
    fireEvent.change(input, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders with initial value", () => {
    const testName = "ValueTextField";

    render(
      <TextField
        componentName={testName}
        value="Initial Value"
        onChange={() => {}}
      />,
    );

    const input = screen.getByDisplayValue("Initial Value");
    expect(input).toBeInTheDocument();
  });
});
