import MuiContainer from "@mui/material/Container";
import type { ContainerProps as MuiContainerProps } from "@mui/material/Container";

export interface ContainerProps extends MuiContainerProps {
  componentName: string;
  children: React.ReactNode;
}

export const Container = ({
  componentName,
  children,
  ...props
}: ContainerProps) => {
  return (
    <MuiContainer
      {...props}
      data-testid={`${componentName}-Container`}
      sx={{
        display: "flex",
        flexGrow: 1,
        width: "100%",
        height: "100vh",
        ...props.sx,
      }}
    >
      {children}
    </MuiContainer>
  );
};
