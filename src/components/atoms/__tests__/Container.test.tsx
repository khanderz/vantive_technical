import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "../Container";

describe("Container Component", () => {
  it("renders with the correct componentName in the DOM", () => {
    const testName = "TestComponent";

    render(
      <Container componentName={testName}>
        <span>Child content</span>
      </Container>,
    );

    const containerElement = screen.getByTestId(`${testName}-Container`);
    expect(containerElement).toBeInTheDocument();

    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});
