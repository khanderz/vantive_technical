import { useState } from "react";
import { Grid, LoadingButton, TextField, type ContainerProps } from "../atoms";
import { useTasksContext, type Task } from "../../contexts";

interface TaskInputProps {
  componentName: ContainerProps["componentName"];
}

export const TaskInput = ({ componentName }: TaskInputProps) => {
  const { loading, error, addTask } = useTasksContext();

  const [taskInput, setTaskInput] = useState<Task["title"]>("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput.trim());
      setTaskInput("");
    }
  };

  return (
    <Grid
      componentName={`${componentName}-Task-Input-row`}
      container
      direction="row"
      columnGap={2}
      sx={{
        alignItems: "center",
        mb: 4,
      }}
    >
      <TextField
        componentName={componentName}
        placeholder="Add a new task"
        value={taskInput}
        onChange={e => setTaskInput(e.target.value)}
      />
      <LoadingButton
        componentName={componentName}
        loading={loading}
        disabled={!taskInput.trim() || !!error || loading}
        onClick={handleAddTask}
      >
        Add Task
      </LoadingButton>
    </Grid>
  );
};
