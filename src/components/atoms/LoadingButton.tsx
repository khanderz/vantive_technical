import MuiLoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps as MuiLoadingButtonProps } from "@mui/lab/LoadingButton";
import type { ContainerProps } from "./Container";
import { Typography } from "./Typography";

interface LoadingButtonProps extends MuiLoadingButtonProps {
  componentName: ContainerProps["componentName"];
  helperText?: string;
}

export const LoadingButton = ({
  componentName,
  variant = "contained",
  helperText,
  ...props
}: LoadingButtonProps) => {
  return (
    <>
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
      {helperText && (
        <Typography
          componentName={`${componentName}-Loading-button-helper-text`}
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            marginTop: 1,
            textAlign: "center",
          }}
        >
          {helperText}
        </Typography>
      )}
    </>
  );
};
