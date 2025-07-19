import MuiTypography from "@mui/material/Typography";
import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import type { ContainerProps } from "./Container";

export interface TypographyProps extends MuiTypographyProps {
  componentName: ContainerProps["componentName"];
}

export const Typography = ({ componentName, ...props }: TypographyProps) => {
  return (
    <MuiTypography {...props} data-testid={`${componentName}-Typography`}>
      {props.children}
    </MuiTypography>
  );
};
