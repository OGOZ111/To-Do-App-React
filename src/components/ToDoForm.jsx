import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    if (value.trim() === "") {
      alert("Please enter a task");
    } else {
      e.preventDefault();

      addTodo(value);

      setValue("");
    }
  };
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="what is the task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
