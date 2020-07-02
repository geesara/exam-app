import React, { useState } from "react";
import useListAUDState from "../hooks/useListAUDState";
import SingleQuestion from "./SingleQuestion";
import CreateQuestion from "./CreateQuestion";

export default function CreateExamPaper({ exam, updateExam }) {
  const [
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
  ] = useListAUDState(exam.questions);
  const [examName, setExamName] = useState(exam.name);

  return (
    <div className="createExamPaper">
      <input
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
        onClick={() =>
          updateExam(exam.id, { questions: questions, name: examName })
        }
      >
        Save Exam
      </button>
    </div>
  );
}
