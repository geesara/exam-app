import React, { useState, useEffect } from "react";

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
    // console.log(answerText, answer.answer);
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
    <div>
      <p>{answer.question}</p>
      <input
        type="text"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      {answersLength - 1 > currentQIndex && (
        <button onClick={handleNextButtonClick}>Next</button>
      )}
      {answersLength - 1 === currentQIndex && (
        <button onClick={handleFinishButtonClick}>Finish</button>
      )}
      {currentQIndex > 0 && (
        <button onClick={handlePrevButtonClick}>Prev</button>
      )}
    </div>
  );
}
