import {
  Container,
  Grid,
  LoadingButton,
  Typography,
  TextField,
} from "../components/atoms";
import { TaskItem } from "../components/molecules/TaskItem";

export const Home = () => {
  const componentName = "Home";

  const taskLabel = "test";

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

      <TextField componentName={componentName} placeholder="Add a new task" />

      <Grid
        componentName={`${componentName}-task-items-column`}
        container
        direction="column"
        sx={{
          justifyContent: "center",
          mb: 2,
        }}
      >
        <TaskItem componentName={componentName} taskLabel={taskLabel} />
      </Grid>
      <LoadingButton componentName={componentName}>Add Task</LoadingButton>
    </Container>
  );
};
