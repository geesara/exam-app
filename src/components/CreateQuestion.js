import React, { useState } from "react";

export default function CreateQuestion({ addQuestion }) {
  const [newQuestion, setNewQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({ question: newQuestion });
    setNewQuestion("");
  };

  return (
    <div className="CreateQuestion">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Add new question"
        />
      </form>
    </div>
  );
}
