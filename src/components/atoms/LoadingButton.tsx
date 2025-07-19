import MuiLoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps as MuiLoadingButtonProps } from "@mui/lab/LoadingButton";
import type { ContainerProps } from "./Container";
import { Typography } from "./Typography";

interface LoadingButtonProps extends MuiLoadingButtonProps {
  componentName: ContainerProps["componentName"];
}

export const LoadingButton = ({
  componentName,
  variant = "contained",
  ...props
}: LoadingButtonProps) => {
  return (
    <MuiLoadingButton
      {...props}
      data-testid={`${componentName}-Loading-button`}
      variant={variant}
      sx={{
        border: "2px solid #000000",
        boxShadow: "3px 3px 0px 0px #000000",
        ...props.sx,
      }}
    />
  );
};
