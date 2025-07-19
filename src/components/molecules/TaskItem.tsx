import { useTasksContext, type Task } from "../../contexts";
import { Grid, IconButton, Typography, type ContainerProps } from "../atoms";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export interface TaskItemProps {
  componentName: ContainerProps["componentName"];
  task: Task;
}

export const TaskItem = ({ componentName, task }: TaskItemProps) => {
  const { toggleComplete, editTask, removeTask } = useTasksContext();

  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  const handleEdit = () => {
    const newTitle = prompt("Edit task title:", task.title);
    if (newTitle && newTitle.trim() !== "" && newTitle !== task.title) {
      editTask(task.id, newTitle.trim());
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (confirmDelete) {
      removeTask(task.id);
    }
  };

  return (
    <Grid
      componentName={`${componentName}-Task-item-row`}
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Grid
        componentName={`${componentName}-Task-left`}
        direction="row"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Checkbox checked={task.completed} onChange={handleToggleComplete} />
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

      <Grid
        componentName={`${componentName}-Task-actions`}
        direction="row"
        sx={{ gap: 1 }}
      >
        <IconButton
          componentName={`${componentName}-edit-task`}
          onClick={handleEdit}
          color="primary"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          componentName={`${componentName}-delete-task`}
          onClick={handleDelete}
          color="error"
        >
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
