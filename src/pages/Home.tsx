import { useState } from "react";
import {
  Container,
  Grid,
  LoadingButton,
  Typography,
  TextField,
  IconButton,
} from "../components/atoms";
import { TaskItem } from "../components/molecules/TaskItem";
import AddIcon from "@mui/icons-material/Add";

export const Home = () => {
  const componentName = "Home";
  const placeholderTasks = [
    "Finish the React task manager",
    "Review pull requests",
    "Write unit tests for components",
    "Update project documentation",
    "Refactor the TaskItem component",
  ];

  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState<string[]>(placeholderTasks);

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks(prev => [...prev, taskInput.trim()]);
      setTaskInput("");
    }
  };

  return (
    <Container
      componentName={componentName}
      sx={{
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Typography componentName={componentName} variant="h4" gutterBottom>
        Task Manager
      </Typography>

      <Grid
        componentName={`${componentName}-task-input-row`}
        container
        direction="row"
        sx={{
          alignItems: "center",
          mb: 2,
        }}
      >
        <Grid componentName={componentName} sx={{ flexGrow: 1 }}>
          <TextField
            componentName={componentName}
            placeholder="Add a new task"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
          />
        </Grid>
        <IconButton
          componentName={componentName}
          color="primary"
          onClick={handleAddTask}
        >
          <AddIcon />
        </IconButton>
      </Grid>

      <Grid
        componentName={`${componentName}-task-items-column`}
        container
        direction="column"
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 1,
          mb: 2,
        }}
      >
        {tasks.map((taskLabel, index) => (
          <TaskItem
            key={index}
            componentName={componentName}
            taskLabel={taskLabel}
          />
        ))}{" "}
      </Grid>
      <LoadingButton componentName={componentName}>Add Task</LoadingButton>
    </Container>
  );
};
