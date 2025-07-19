import {
  Container,
  Grid,
  LoadingButton,
  Typography,
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

      <Grid
        componentName={`${componentName}-task-items-column`}
        container
        direction="column"
        sx={{
          justifyContent: "center",
        }}
      >
        <TaskItem componentName={componentName} taskLabel={taskLabel} />
      </Grid>
      <LoadingButton componentName={componentName}>Add Task</LoadingButton>
    </Container>
  );
};
