import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function DuplicationForm() {
  const [items, setItems] = useState(initialItems);
  const [id, setId] = useState(0);

  const selectedItem = items.find((item) => item.id === id);

  const handleChange = (id, e) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <h2>Whats your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              className="border-2"
              value={item.title}
              onChange={(e) => handleChange(item.id, e)}
            />{" "}
            <button onClick={() => setId(item.id)}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}
