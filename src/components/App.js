import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onCategoryChange(category){
    setSelectedCategory(category);
  }
  function handleNewTaskSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete))
  }
  const filteredTasks = selectedCategory === "All"
  ? tasks
  : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryChange={onCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTaskSubmit} />
      <TaskList tasks={filteredTasks} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
