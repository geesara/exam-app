import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import UpdateExamPaper from "./components/UpdateExamPaper";
import useListAUDState from "./hooks/useListAUDState";
import ExamList from "./components/ExamList";
import AnswerExamPaper from "./components/AnswerExamPaper";
import CreateExamPaper from "./components/CreateExamPaper";

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
      <h1>Exam App</h1>
      <Switch>
        <Route exact path="/">
          <ExamList exams={exams} deleteExam={deleteExam} />
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
      <Link to="/new-exam">New Exam</Link>
      <button onClick={() => addExam({ questions: [] })}>NewExam</button>
      <button onClick={debug}>debug</button>
      <Link to="/">Home</Link>
    </div>
  );
}
