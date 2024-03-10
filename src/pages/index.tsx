import { useState } from "react";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import { Box, Checkbox, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const TaskWave = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Practice React Challenges",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Update CV",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Apply For Jobs",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Clean the house",
      isCompleted: false,
    },
  ]);

  return (
    <div>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        {tasks.map((task) => (
          <div key={task.id} className="flex col justify-start">
            <Checkbox {...label} defaultChecked color="secondary" />
            {task.text}
            <Fab size="small" color="secondary" aria-label="delete">
              <DeleteIcon />
            </Fab>
            <Fab size="small" color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </div>
        ))}
      </Box>
    </div>
  );
};
export default TaskWave;
