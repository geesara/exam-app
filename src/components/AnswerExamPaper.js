import React, { useState } from "react";
import useListAUDState from "../hooks/useListAUDState";
import SingleAnswer from "./SingleAnswer";
import FinishExam from "./FinishExam";

export default function AnswerExamPaper({ exam }) {
  const [answers, , updateAnswer] = useListAUDState(
    exam.questions.map((question) => ({ ...question, answer: "" }))
  );
  const [currentQIndex, setCurrentQIndex] = useState(0);
  return (
    <div>
      {currentQIndex >= 0 && answers.length > currentQIndex && (
        <SingleAnswer
          answer={answers[currentQIndex]}
          updateAnswer={updateAnswer}
          currentQIndex={currentQIndex}
          setCurrentQIndex={setCurrentQIndex}
          answersLength={answers.length}
        />
      )}
      {answers.length <= currentQIndex && "You finished Answering!"}
      {answers.length <= currentQIndex && <FinishExam answers={answers} />}
      <p>current index: {currentQIndex}</p>
    </div>
  );
}
