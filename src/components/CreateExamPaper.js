import React from "react";
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
      <button onClick={() => updateExam(exam.id, { questions: questions })}>
        Save Exam
      </button>
    </div>
  );
}
