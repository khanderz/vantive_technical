import { useTasksContext, type Task } from "../../contexts";
import { Grid, Typography, type ContainerProps } from "../atoms";
import Checkbox from "@mui/material/Checkbox";

export interface TaskItemProps {
  componentName: ContainerProps["componentName"];
  task: Task;
}

export const TaskItem = ({ componentName, task }: TaskItemProps) => {
  const { toggleComplete } = useTasksContext();

  const handleToggle = () => {
    toggleComplete(task.id);
  };

  return (
    <Grid
      componentName={`${componentName}-Task-item-row`}
      direction="row"
      sx={{
        alignItems: "center",
      }}
    >
      <Checkbox checked={task.completed} onChange={handleToggle} />

      <Typography
        componentName={`${componentName}-TaskLabel`}
        variant="body1"
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.title}
      </Typography>
    </Grid>
  );
};
