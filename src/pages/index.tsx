import { useState } from "react";
// import AssignmentIcon from "@material-ui/icons/Assignment";
import { Box, Card, Checkbox, Fab } from "@mui/material";
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
    <div className="flex flex-col gap-4">
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <div >
        {tasks.map((task) => (
          <Card sx={{ minWidth: 300 }} className="flex gap-4 items-center">
            <div key={task.id}>
              <Checkbox {...label} color="secondary" />
              {task.text}
              <Fab size="small" color="secondary" aria-label="delete">
                <DeleteIcon />
              </Fab>
              <Fab size="small" color="secondary" aria-label="edit">
                <EditIcon />
              </Fab>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default TaskWave;
