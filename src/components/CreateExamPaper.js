import React from "react";
import useListAUDState from "../hooks/useListAUDState";
import SingleQuestion from "./SingleQuestion";
import CreateQuestion from "./CreateQuestion";

export default function CreateExamPaper() {
  const [
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion,
  ] = useListAUDState([
    { id: "1", question: "What is your name?" },
    { id: "2", question: "How old are you?" },
  ]);

  return (
    <div className="createExamPaper">
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          question={question}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <CreateQuestion addQuestion={addQuestion} />
    </div>
  );
}
