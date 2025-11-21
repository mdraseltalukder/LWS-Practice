import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div className="flex">
      <input
        placeholder="Add task"
        className="border border-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
        className="cursor-pointer"
      >
        Add
      </button>
    </div>
  );
}
