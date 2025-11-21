import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const handleContract = (contact) => {
    setTo(contact);
  };
  return (
    <div>
      <ContactList contacts={contacts} onSelect={handleContract} />
      <Chat key={to.id} contact={to} />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
