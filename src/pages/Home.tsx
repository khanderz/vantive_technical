import { Container, LoadingButton, Typography } from "../components/atoms";
import Grid from "@mui/material/Grid";

export const Home = () => {
  const componentName = "Home";

  return (
    <Container
      componentName={componentName}
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography componentName={componentName} variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid>
          <Typography
            componentName={componentName}
            variant="body1"
            gutterBottom
          >
            Task Manager
          </Typography>
        </Grid>
      </Grid>
      <LoadingButton componentName={componentName}>Add Task</LoadingButton>
    </Container>
  );
};
