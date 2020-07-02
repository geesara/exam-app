import React from "react";

export default function FinishExam({ answers }) {
  return (
    <div>
      {answers.map((answer) => (
        <div key={answer.id}>
          <h3>{answer.question}</h3>
          <p>{answer.answer}</p>
        </div>
      ))}
    </div>
  );
}
