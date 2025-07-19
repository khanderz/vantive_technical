import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Typography } from "../Typography";

describe("Typography Component", () => {
  it("renders with the correct data-testid", () => {
    const testName = "TestTypography";

    render(
      <Typography componentName={testName} variant="h4">
        Hello Typography
      </Typography>,
    );

    const typographyElement = screen.getByTestId(`${testName}-Typography`);
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent("Hello Typography");
  });

  it("respects the variant prop", () => {
    const testName = "VariantTypography";

    render(
      <Typography componentName={testName} variant="h6">
        Variant Test
      </Typography>,
    );

    const typographyElement = screen.getByTestId(`${testName}-Typography`);
    // By default, MUI h6 renders as <h6>
    expect(typographyElement.tagName.toLowerCase()).toBe("h6");
  });

  it("renders children as text content", () => {
    const testName = "ChildrenTypography";
    const childText = "This is some child text";

    render(
      <Typography componentName={testName} variant="body1">
        {childText}
      </Typography>,
    );

    const typographyElement = screen.getByTestId(`${testName}-Typography`);
    expect(typographyElement).toHaveTextContent(childText);
  });
});
