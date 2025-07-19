import { useState } from "react";
import { Container, Grid, Typography, Header } from "../components/atoms";
import { TaskItem, TaskInput } from "../components/molecules";
import { useTasksContext } from "../contexts";
import { ButtonGroup, Button } from "@mui/material";

export const Home = () => {
  const { tasks, loading, error } = useTasksContext();

  const componentName = "Home";

  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <Container
      componentName={componentName}
      sx={{
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Header componentName={componentName} title="Task Manager" />

      {error && (
        <Typography
          componentName={`${componentName}-error`}
          color="error"
          gutterBottom
        >
          {error}
        </Typography>
      )}

      <TaskInput componentName={componentName} />

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
