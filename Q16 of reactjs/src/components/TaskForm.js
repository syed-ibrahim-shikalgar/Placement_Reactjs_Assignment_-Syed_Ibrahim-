import React, { useState } from "react";
import axios from "axios";
import "../styles/taskManager.css";

function TaskForm({ token }) {
  const [title, setTitle] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateTask = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://reqres.in/api/tasks",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setSuccess("Task created successfully.");
    } catch (error) {
      setSuccess("");
      console.error(error);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create</button>
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default TaskForm;
