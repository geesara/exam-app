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
          <form className="SingleQuestion-form" onSubmit={handleSubmit}>
            <input
              className="SingleQuestion-input"
              type="text"
              value={updatedQuestion}
              onChange={(e) => setUpdatedQuestion(e.target.value)}
            />
          </form>
          <button className="SingleQuestion-btn" onClick={handleSubmit}>
            Save
          </button>
        </>
      ) : (
        <>
          <p className="SingleQuestion-text">{question.question}</p>
          <button className="SingleQuestion-btn" onClick={toggleIsUpdating}>
            Edit
          </button>
        </>
      )}
      <button
        className="SingleQuestion-btn"
        onClick={() => deleteQuestion(question.id)}
      >
        Delete
      </button>
    </div>
  );
}
