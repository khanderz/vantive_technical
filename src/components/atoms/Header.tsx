import type { ContainerProps } from "./Container";
import { Typography } from "./Typography";

interface HeaderProps {
  componentName: ContainerProps["componentName"];
  title: string;
}

export const Header = ({ componentName, title }: HeaderProps) => {
  return (
    <Typography
      componentName={`${componentName}-Header`}
      variant="h4"
      gutterBottom
      sx={{
        mb: 8,
        textTransform: "capitalize",
      }}
    >
      {title}
    </Typography>
  );
};
