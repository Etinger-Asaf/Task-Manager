import { useEffect, useState } from "react";
import classes from "./Tasks.module.css";
const Tasks = ({ tasksList, removeTask }) => {
  const [tasks, setTasks] = useState(tasksList);

  useEffect(() => {
    setTasks(tasksList);
  }, [tasksList]);

  const tasksListDisplay = tasks.map((task) => {
    return (
      <li key={task.inputValue} className={classes.container}>
        <div className={classes.taskInfo}>
          <h4 className={classes.taskHeader}>{task.inputValue}</h4>
          <h6 className={classes.taskBody}>{task.textAreaValue}</h6>
        </div>

        <button
          className={classes.btn}
          onClick={() => {
            removeTask(task.inputValue);
          }}
        >
          Done
        </button>
      </li>
    );
  });

  return <div>{tasksListDisplay}</div>;
};

export default Tasks;
