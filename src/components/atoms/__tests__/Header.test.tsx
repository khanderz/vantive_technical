import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "../Header";

describe("Header Component", () => {
  it("renders with correct title and data-testid", () => {
    const testName = "TestHeader";
    const title = "My Test Title";

    render(<Header componentName={testName} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();

    const headerElement = screen.getByTestId(`${testName}-Header-Typography`);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders as an h4 variant with capitalization style", () => {
    const testName = "VariantHeader";

    render(<Header componentName={testName} title="another title" />);

    const headerElement = screen.getByTestId(`${testName}-Header-Typography`);

    expect(headerElement.tagName.toLowerCase()).toBe("h4");

    expect(screen.getByText(/another title/i)).toBeInTheDocument();
  });
});
