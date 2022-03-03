import classes from "./App.module.css";
import Input from "./Components/Input/Input";
import Tasks from "./Components/Tasks/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasksList, setTaskList] = useState();
  const [tasksListTasks, setTaskListTasks] = useState([]);

  useEffect(() => {
    if (!tasksList) {
      return;
    }

    setTaskListTasks([...tasksListTasks, tasksList]);
  }, [tasksList]);

  const removeTasksHandler = (value) => {
    
    const newTasksList = tasksListTasks.filter((el) => el.inputValue !== value);
    setTaskListTasks(newTasksList);
  };

  return (
    <div className={classes.App}>
      <Input setTaskList={setTaskList} className={classes.input} />
      <Tasks tasksList={tasksListTasks} removeTask={removeTasksHandler} />
    </div>
  );
}

export default App;
