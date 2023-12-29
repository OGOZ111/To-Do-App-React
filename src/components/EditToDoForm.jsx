import React, { useState } from "react";

export const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    if (value.trim() === "") {
      alert("Please enter a task");
    } else {
      e.preventDefault();
      editTask(value, task.id);
      setValue("");
    }
  };
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
