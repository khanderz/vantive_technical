import { Container, Typography, Button } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <Button variant="contained" color="primary">
        Add Task
      </Button>
    </Container>
  );
};
