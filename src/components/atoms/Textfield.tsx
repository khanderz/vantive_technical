import MuiTextField from "@mui/material/TextField";
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";
import type { ContainerProps } from "./Container";

export interface TextFieldProps
  extends Omit<MuiTextFieldProps<"outlined">, "variant"> {
  componentName: ContainerProps["componentName"];
}

export const TextField = ({ componentName, ...props }: TextFieldProps) => {
  return (
    <MuiTextField
      {...props}
      data-testid={`${componentName}-Textfield`}
      variant="outlined"
      fullWidth={props.fullWidth}
    />
  );
};
