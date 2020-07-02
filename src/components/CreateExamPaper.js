import React, { useState } from "react";
import useListAUDState from "../hooks/useListAUDState";
import SingleQuestion from "./SingleQuestion";
import CreateQuestion from "./CreateQuestion";
import "./styles/CreateExamPaper.css";

export default function CreateExamPaper({ addExam }) {
  const [
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
  ] = useListAUDState([]);
  const [examName, setExamName] = useState("");

  return (
    <div className="CreateExamPaper">
      <input
        className="UpdateExamPaper-titleinput"
        type="text"
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
        placeholder="Type Exam Name Here"
      />
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          question={question}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <CreateQuestion addQuestion={addQuestion} />
      <button
        className="UpdateExamPaper-savebtn"
        onClick={() => addExam({ questions: questions, name: examName })}
      >
        Save Exam
      </button>
    </div>
  );
}
