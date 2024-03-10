import { useState } from "react";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import DeleteIcon from "@material-ui/icons/Delete";

const TaskWave = () => {
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
      
      {tasks.map((task) => (
        <div key={task.id}>{task.text}</div>
      ))}
    </div>
  );
};
export default TaskWave;
