import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "../Grid";

describe("Grid Component", () => {
  it("renders with correct data-testid and children", () => {
    const testName = "TestGrid";

    render(
      <Grid componentName={testName}>
        <span>Child Grid Content</span>
      </Grid>,
    );

    const gridElement = screen.getByTestId(`${testName}-Grid`);
    expect(gridElement).toBeInTheDocument();

    expect(screen.getByText("Child Grid Content")).toBeInTheDocument();
  });

  it("merges custom sx styles with defaults", () => {
    const testName = "StyledGrid";

    render(
      <Grid
        componentName={testName}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <span>Styled Child</span>
      </Grid>,
    );

    const gridElement = screen.getByTestId(`${testName}-Grid`);
    expect(gridElement).toBeInTheDocument();

    expect(screen.getByText("Styled Child")).toBeInTheDocument();
  });
});
