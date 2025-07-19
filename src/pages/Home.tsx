import { Typography, Button } from "@mui/material";
import { Container } from "../components/atoms";

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
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <Button variant="contained" color="primary">
        Add Task
      </Button>
    </Container>
  );
};
