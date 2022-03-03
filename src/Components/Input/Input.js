import { useState } from "react";
import classes from "./Input.module.css";
import "./Input.module.css";
const Input = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length < 2) {
      return;
    }
    setTaskList({
      inputValue: inputValue,
      textAreaValue: textAreaValue,
    });
    setInputValue("");
    setTextAreaValue("");
  };

  const inputValueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const textAreaValueHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div className={classes.inputAndBtnContainer}>
        <input
          type="text"
          onChange={inputValueChangeHandler}
          placeholder="Name your task"
          value={inputValue}
          className={classes.input}
        ></input>
        <button className={classes.btn}>Task it</button>
      </div>
      <div className={classes.wrapper}>
        <textarea
          className={classes.textarea}
          onChange={textAreaValueHandler}
          placeholder="Task description"
          value={textAreaValue}
        ></textarea>
      </div>
    </form>
  );
};

export default Input;
