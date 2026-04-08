import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Read book",
    "Take a shower",
    "Breakfast",
  ]);
  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTasks.trim() === "") {
      return;
    }
    setTasks((t) => [...t, newTasks]);
    setNewTasks("");
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ToDoList;
