import { Container, Grid, Typography, Header } from "../components/atoms";
import { TaskItem, TaskInput } from "../components/molecules";
import { useTasksContext } from "../contexts";

export const Home = () => {
  const { filteredTasks, loading, error } = useTasksContext();

  const componentName = "Home";

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
