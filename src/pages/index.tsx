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
    <div className="flex flex-col gap-4 p-4">
      <div className="pb-6 flex justify-center items-center">
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon color="success" />
        </Fab>
        <span className="pl-4">Add task</span>
      </div>
      <div className="flex gap-8 flex-col items-center">
        {tasks.map((task) => (
          <div key={task.id} className="flex w-[50vw] justify-between">
            <Card
              sx={{ minWidth: 300 }}
              className="flex w-[100%] items-center p-4"
            >
              <Checkbox {...label} color="secondary" />
              <span className="text-left flex-1">{task.text}</span>
              <div className="flex gap-3 justify-between">
                <Fab size="small" color="secondary" aria-label="delete">
                  <DeleteIcon color="secondary" />
                </Fab>
                <Fab size="small" color="secondary" aria-label="edit">
                  <EditIcon color="secondary" />
                </Fab>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TaskWave;
