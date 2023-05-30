import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/taskManager.css";

function Dashboard({ token }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("https://reqres.in/api/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
    };

    fetchTasks();
  }, [token]);

  return (
    <div className="dashboard-container">
      <h2>Task Dashboard</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
