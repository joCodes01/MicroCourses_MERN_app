import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import CourseDetails from "./pages/CourseDetails.jsx";
import Home from "./pages/Home.jsx";
import "/src/styles/Styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/coursedetails/:id" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
