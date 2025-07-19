import { useState } from "react";
import {
  Container,
  Grid,
  LoadingButton,
  Typography,
  TextField,
} from "../components/atoms";
import { TaskItem } from "../components/molecules/TaskItem";
import { useTasksContext, type Task } from "../contexts";
import { ButtonGroup, Button } from "@mui/material";

export const Home = () => {
  const { tasks, loading, error, addTask } = useTasksContext();

  const componentName = "Home";

  const [taskInput, setTaskInput] = useState<Task["title"]>("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput.trim());
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
      <Typography
        componentName={componentName}
        variant="h4"
        gutterBottom
        sx={{
          mb: 8,
        }}
      >
        Task Manager
      </Typography>

      {error && (
        <Typography
          componentName={`${componentName}-error`}
          color="error"
          gutterBottom
        >
          {error}
        </Typography>
      )}

      <Grid
        componentName={`${componentName}-task-input-row`}
        container
        direction="row"
        sx={{
          alignItems: "center",
          mb: 2,
        }}
      >
        <Grid componentName={componentName} sx={{ flexGrow: 1, mr: 2 }}>
          <TextField
            componentName={componentName}
            placeholder="Add a new task"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
          />
        </Grid>
        <LoadingButton
          componentName={componentName}
          loading={loading}
          disabled={!taskInput.trim() || !!error || loading}
          onClick={handleAddTask}
        >
          Add Task
        </LoadingButton>
      </Grid>

      {loading && (
        <Typography
          componentName={`${componentName}-loading`}
          variant="body2"
          gutterBottom
        >
          Loading tasks...
        </Typography>
      )}

      <ButtonGroup sx={{ mb: 2 }}>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={filter === "pending" ? "contained" : "outlined"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </ButtonGroup>

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
        {filteredTasks.map(task => (
          <TaskItem key={task.id} componentName={componentName} task={task} />
        ))}

        {filteredTasks.length === 0 && !loading && (
          <Typography
            componentName={`${componentName}-no-tasks`}
            variant="body2"
            color="text.secondary"
          >
            No tasks found for this filter.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};
