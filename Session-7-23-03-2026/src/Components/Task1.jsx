import React, { useState, useMemo, useCallback, memo } from "react";

const initialTasks = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Build Project", completed: false },
  { id: 3, title: "Revise JS", completed: true }
];

// memo component
const TaskItem = memo(function TaskItem({ task, onDelete, onToggle }) {
  console.log("rendering:", task.title);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginLeft: "8px",
          marginRight: "8px"
        }}
      >
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
});

export default function Task1() {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  // delete task
  const handleDelete = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // toggle completed
  const handleToggle = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  // add task
  const handleAdd = () => {
    if (newTask.trim() === "") return;

    const newObj = {
      id: Date.now(),
      title: newTask,
      completed: false
    };

    setTasks((prev) => [...prev, newObj]);
    setNewTask("");
  };

  // clear all
  const handleClearAll = useCallback(() => {
    setTasks([]);
  }, []);

  // filter tasks
  const filteredTasks = useMemo(() => {
    console.log("filtering...");

    let temp = tasks;

    if (search) {
      temp = temp.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (showCompleted) {
      temp = temp.filter((t) => t.completed);
    }

    return temp;
  }, [tasks, search, showCompleted]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>

      {/* Add Task */}
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <br /><br />

      {/* Search */}
      <input
        type="text"
        placeholder="Search task"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Show completed */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show Completed Only
        </label>
      </div>

      <br />

      {/* Clear All */}
      <button onClick={handleClearAll}>Clear All</button>

      <ul>
        {filteredTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))
        )}
      </ul>
    </div>
  );
}