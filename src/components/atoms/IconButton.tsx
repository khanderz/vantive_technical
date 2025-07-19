import MuiIconButton from "@mui/material/IconButton";
import type { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";
import type { ContainerProps } from "./Container";

export interface IconButtonProps extends MuiIconButtonProps {
  componentName: ContainerProps["componentName"];
}

export const IconButton = ({ componentName, ...props }: IconButtonProps) => {
  return (
    <MuiIconButton
      {...props}
      data-testid={`${componentName}-IconButton`}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.sx,
      }}
    >
      {props.children}
    </MuiIconButton>
  );
};
