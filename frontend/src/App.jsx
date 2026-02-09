import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import CourseDetails from "./pages/CourseDetails.jsx";
import Home from "./pages/Home.jsx";

// function CourseListItem() {
//   return (
//     <>
//       <h1>This is CourseListItem</h1>
//       <h1>Course title</h1>
//       <p>Short description to explain the course content.</p>
//       <p>0 hours</p>
//       <a>View course</a>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/coursedetails" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
