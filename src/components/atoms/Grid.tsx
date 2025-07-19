import MuiGrid from "@mui/material/Grid";
import type { GridProps as MuiGridProps } from "@mui/material/Grid";
import type { ContainerProps } from "./Container";

export interface GridProps extends MuiGridProps {
  componentName: ContainerProps["componentName"];
}

export const Grid = ({ componentName, ...props }: GridProps) => {
  return (
    <MuiGrid
      {...props}
      data-testid={`${componentName}-Grid`}
      sx={{
        alignItems: "center",
        display: "flex",
        ...props.sx,
      }}
    >
      {props.children}
    </MuiGrid>
  );
};
