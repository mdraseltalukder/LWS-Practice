import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "../data/taskData,js";

export default function TodoApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (tasks) => {
    let nextId = tasks.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return nextId++;
  };

  const handleAddTask = (text) => {
    if (!text.trim()) return;
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text,
        done: false,
      },
    ]);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => taskId !== task.id));
  };

  const handleChangeTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  return (
    <div className="flex flex-col w-[500px] items-start justify-start">
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onchangeTask={handleChangeTask}
      />
    </div>
  );
}
