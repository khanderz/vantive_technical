import MuiContainer, {
    ContainerProps as MuiContainerProps,
  } from "@mui/material/Container";
  
  export interface ContainerProps extends MuiContainerProps {
    componentName: string;
  }
  
  export const Container = ({ componentName, ...props }: ContainerProps) => {
    return (
      <MuiContainer
        {...props}
        data-testid={`${componentName}-container`}
        sx={{
          display: "flex",
          flexGrow: 1,
          mb: 10,
          ...props.sx,
        }}
      ></MuiContainer>
    );
  };
  