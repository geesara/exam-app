import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ExamApp from "./ExamApp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ExamApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
