import { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "../data/taskData,js";
import { useTaskReducer } from "../../reducers/useTaskReducer";

export default function TodoApp() {
  const [tasks, dispatch] = useReducer(useTaskReducer, initialTasks);

  const getNextId = (tasks) => {
    let nextId = tasks.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return nextId + 1;
  };

  const handleAddTask = (text) => {
    if (!text.trim()) return;
    dispatch({
      type: "add",
      text,
      id: getNextId(tasks),
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: "delete",
      taskId,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "change",
      task,
    });
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
