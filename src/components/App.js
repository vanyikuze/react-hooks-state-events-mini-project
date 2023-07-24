import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [data, setData] = useState([]);
  const categories = CATEGORIES;

  function handleFilterChange(selectedCategory) {
    if (selectedCategory === "All") {
      setData([CATEGORIES]); 
    } else {
      const filteredData = data.filter(
        (item) => item.category === selectedCategory
      );
      setData(filteredData);
    }
  }

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDelete(text) {
    const confirm = window.confirm("Are you sure you want to delete a task?");

    if (confirm)
      setTasks((tasks) => tasks.filter((task) => task.text !== text));
    else return;
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      <NewTaskForm categories={CATEGORIES} onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
