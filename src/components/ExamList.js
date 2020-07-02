import React from "react";
import { Link } from "react-router-dom";
import "./styles/ExamList.css";

export default function ExamList({ exams, deleteExam }) {
  return (
    <div className="ExamList">
      {exams.map((exam) => (
        <div className="ExamList-item" key={exam.id}>
          <p>{exam.id}</p>
          <Link to={`/answer/${exam.id}`}>Answer</Link>
          <Link to={`/exam/${exam.id}`}>Edit</Link>
          <button onClick={() => deleteExam(exam.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
