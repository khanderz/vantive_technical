import { Grid, Typography, type ContainerProps } from "../atoms";
import Checkbox from "@mui/material/Checkbox";

export interface TaskItemProps {
  componentName: ContainerProps["componentName"];
  taskLabel: string;
}

export const TaskItem = ({ componentName, taskLabel }: TaskItemProps) => {
  return (
    <Grid
      componentName={`${componentName}-Task-item-row`}
      direction="row"
      sx={{
        alignItems: "center",
      }}
    >
      <Checkbox />

      <Typography componentName={`${componentName}-TaskLabel`} variant="body1">
        {taskLabel}
      </Typography>
    </Grid>
  );
};
