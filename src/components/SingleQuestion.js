import React, { useState } from "react";
import useToggleState from "../hooks/useToggleState";
import "./styles/SingleQuestion.css";

export default function SingleQuestion({
  question,
  updateQuestion,
  deleteQuestion,
}) {
  const [isUpdating, toggleIsUpdating] = useToggleState(false);
  const [updatedQuestion, setUpdatedQuestion] = useState(question.question);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuestion(question.id, { question: updatedQuestion });
    toggleIsUpdating();
  };

  return (
    <div className="SingleQuestion">
      {isUpdating ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={updatedQuestion}
              onChange={(e) => setUpdatedQuestion(e.target.value)}
            />
          </form>
          <button onClick={handleSubmit}>Save</button>
        </>
      ) : (
        <>
          <p>{question.question}</p>
          <button onClick={toggleIsUpdating}>Edit</button>
        </>
      )}
      <button onClick={() => deleteQuestion(question.id)}>Delete</button>
    </div>
  );
}
