import React, { useState } from "react";
import useListAUDState from "../hooks/useListAUDState";
import SingleQuestion from "./SingleQuestion";
import CreateQuestion from "./CreateQuestion";
import "./styles/UpdateExamPaper.css";

export default function CreateExamPaper({ exam, updateExam }) {
  const [
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
  ] = useListAUDState(exam.questions);
  const [examName, setExamName] = useState(exam.name);

  return (
    <div className="UpdateExamPaper">
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
        onClick={() =>
          updateExam(exam.id, { questions: questions, name: examName })
        }
      >
        Save Exam
      </button>
    </div>
  );
}
