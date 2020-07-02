import React from "react";
import { Link } from "react-router-dom";
import "./styles/ExamList.css";

export default function ExamList({ exams, deleteExam }) {
  return (
    <div className="ExamList">
      {exams.map((exam) => (
        <div className="ExamList-item" key={exam.id}>
          <div className="ExamList-text">
            <h3>{exam.name ? exam.name : exam.id}</h3>
            <p>{exam.questions.length} Questions</p>
          </div>

          <Link to={`/answer/${exam.id}`} className="ExamList-itembtn">
            Answer
          </Link>
          <Link to={`/exam/${exam.id}`} className="ExamList-itembtn">
            Edit
          </Link>
          <button
            onClick={() => deleteExam(exam.id)}
            className="ExamList-itembtn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
