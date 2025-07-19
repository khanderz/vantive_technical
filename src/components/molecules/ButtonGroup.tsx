import type { ContainerProps } from "../atoms";
import MuiButtonGroup from "@mui/material/ButtonGroup";
import MuiButton from "@mui/material/Button";
import { TaskFilter, useTasksContext } from "../../contexts";

interface ButtonGroupProps {
  componentName: ContainerProps["componentName"];
}

export const ButtonGroup = ({}: ButtonGroupProps) => {
  const { filter, setFilter } = useTasksContext();

  return (
    <MuiButtonGroup sx={{ mb: 2 }}>
      <MuiButton
        variant={filter === TaskFilter.ALL ? "contained" : "outlined"}
        onClick={() => setFilter(TaskFilter.ALL)}
      >
        All
      </MuiButton>
      <MuiButton
        variant={filter === TaskFilter.COMPLETED ? "contained" : "outlined"}
        onClick={() => setFilter(TaskFilter.COMPLETED)}
      >
        Completed
      </MuiButton>
      <MuiButton
        variant={filter === TaskFilter.PENDING ? "contained" : "outlined"}
        onClick={() => setFilter(TaskFilter.PENDING)}
      >
        Pending
      </MuiButton>
    </MuiButtonGroup>
  );
};
