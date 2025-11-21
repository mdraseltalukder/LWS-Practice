import React, { useState } from "react";

export default function FormInputAdd() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const sendMassage = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // setText(text);
    await sendMassage(text);
    setStatus("sent");
    console.log(text);
  };
  if (status === "sent") {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <>
      <form>
        <p>How was your stay at The Prancing Pony?</p>
        <textarea
          className="border border-2"
          value={text}
          onChange={handleChange}
        />
        <br />
        <button
          onClick={handleClick}
          className="bg-amber-300 px-3 py-1 rounded-2xl disabled:bg-gray-400"
          type="submit"
          disabled={text === "" || status === "sending"}
        >
          Send
        </button>
        {status === "sending" && <p>Sending...</p>}
      </form>
    </>
  );
}
