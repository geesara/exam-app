import React, { useState, useEffect } from "react";
import "./styles/SingleAnswer.css";

export default function SingleAnswer({
  answer,
  updateAnswer,
  currentQIndex,
  setCurrentQIndex,
  answersLength,
}) {
  const [answerText, setAnswerText] = useState(answer.question);

  useEffect(() => {
    setAnswerText(answer.answer);
  }, [answer]);

  const handleNextButtonClick = () => {
    updateAnswer(answer.id, { question: answer.question, answer: answerText });
    setCurrentQIndex(currentQIndex + 1);
  };

  const handlePrevButtonClick = () => {
    updateAnswer(answer.id, { question: answer.question, answer: answerText });
    setCurrentQIndex(currentQIndex - 1);
  };

  const handleFinishButtonClick = () => {
    updateAnswer(answer.id, { question: answer.question, answer: answerText });
    setCurrentQIndex(currentQIndex + 1);
  };

  return (
    <div className="SingleAnswer">
      <p>
        <b>{currentQIndex + 1}. </b>
        {answer.question}
      </p>
      <textarea
        className="SingleAnswer-text"
        type="text"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      {answersLength - 1 > currentQIndex && (
        <button className="SingleAnswer-btn" onClick={handleNextButtonClick}>
          Next
        </button>
      )}
      {answersLength - 1 === currentQIndex && (
        <button className="SingleAnswer-btn" onClick={handleFinishButtonClick}>
          Finish
        </button>
      )}
      {currentQIndex > 0 && (
        <button className="SingleAnswer-btn" onClick={handlePrevButtonClick}>
          Prev
        </button>
      )}
    </div>
  );
}
