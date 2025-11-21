import React, { useState } from "react";
import Task from "./Task";

export default function TaskList({ tasks, onDelete, onchangeTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onchangeTask={onchangeTask}
        />
      ))}
    </>
  );
}
