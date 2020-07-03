import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import UpdateExamPaper from "./components/UpdateExamPaper";
import useListAUDState from "./hooks/useListAUDState";
import ExamList from "./components/ExamList";
import AnswerExamPaper from "./components/AnswerExamPaper";
import CreateExamPaper from "./components/CreateExamPaper";
import "./ExamApp.css";

export default function ExamApp() {
  const [exams, addExam, updateExam, deleteExam] = useListAUDState(
    JSON.parse(localStorage.getItem("Exams")).length > 0
      ? JSON.parse(localStorage.getItem("Exams"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("Exams", JSON.stringify(exams));
  }, [exams]);

  const debug = () => {
    console.log(JSON.parse(localStorage.getItem("Exams")));
  };

  return (
    <div className="ExamApp">
      <div className="ExamApp-header">
        <h1 className="ExamApp-title">Exam App</h1>
        <Link to="/" className="ExamApp-headerbtn">
          Home
        </Link>
      </div>
      <div className="ExamApp-container">
        <Switch>
          <Route exact path="/">
            <ExamList exams={exams} deleteExam={deleteExam} />
            <Link to="/new-exam" className="ExamApp-newexambtn">
              New Exam
            </Link>
          </Route>
          {exams.map((exam) => (
            <Route key={exam.id} path={`/exam/${exam.id}`}>
              <UpdateExamPaper exam={exam} updateExam={updateExam} />
            </Route>
          ))}
          {exams.map((exam) => (
            <Route key={exam.id} path={`/answer/${exam.id}`}>
              <AnswerExamPaper exam={exam} />
            </Route>
          ))}
          <Route exact path="/new-exam">
            <CreateExamPaper addExam={addExam} />
          </Route>
        </Switch>
        {/* <button onClick={() => addExam({ questions: [] })}>NewExam</button>
        <button onClick={debug}>debug</button> */}
      </div>
    </div>
  );
}
