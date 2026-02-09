import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function CourseListItem() {
  return (
    <>
      <h1>This is CourseListItem</h1>
      <h1>Course title</h1>
      <p>Short description to explain the course content.</p>
      <p>0 hours</p>
      <a>View course</a>
    </>
  );
}

function App() {
  return (
    <>
      <h1>This is App</h1>
    </>
  );
}

export default App;
