export const useTaskReducer = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "change":
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    case "delete":
      return tasks.filter((task) => task.id !== action.taskId);
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
