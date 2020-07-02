import React from "react";
import "./styles/FinishExam.css";

export default function FinishExam({ answers }) {
  return (
    <div className="FinishExam">
      {answers.map((answer) => (
        <div className="FinishExam-answerbox" key={answer.id}>
          <h3>{answer.question}</h3>
          <p>{answer.answer}</p>
        </div>
      ))}
    </div>
  );
}
