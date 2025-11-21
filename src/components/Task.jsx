import { useState } from "react";

export default function Task({ task, onDelete, onchangeTask }) {
  const [isActive, setIsActive] = useState(true);
  let taskItems;
  if (!isActive) {
    taskItems = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onchangeTask({
              ...task,
              text: e.target.value,
            })
          }
          className="border"
        />
        <button onClick={() => setIsActive(!isActive)}>Save</button>
      </>
    );
  } else {
    taskItems = (
      <>
        {task.text}
        <button onClick={() => setIsActive(!isActive)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done === true}
          onChange={(e) =>
            onchangeTask({
              ...task,
              done: e.target.checked,
            })
          }
        />
        {taskItems}

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    </>
  );
}
