import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export function AddNewCourse() {
  const [courseTitle, setCourseTitle] = useState(null);
  const [shortDescription, setShortDescription] = useState(null);
  const [longDescription, setLongDescription] = useState(null);
  const [hours, setHours] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [category, setCategory] = useState(null);
  const [module1, setModule1] = useState(null);
  const [module2, setModule2] = useState(null);
  const [module3, setModule3] = useState(null);
  const [module4, setModule4] = useState(null);
  const [imageFileName, setImageFileName] = useState("newCourse.png");

  const handleSubmit = (e) => {
    e.preventDefault();

    const modules = [];
    modules.push(
      { title: module1 },
      { title: module2 },
      { title: module3 },
      { title: module4 },
    );

    axios.post("http://localhost:5999/courses", {
      courseTitle: courseTitle,
      title: courseTitle,
      shortDescription: shortDescription,
      description: shortDescription,
      longDescription: longDescription,
      modules: modules,
      hours: hours,
      duration: hours,
      image: imageFileName,
      instructor: instructor,
      category: category,
    });

    //ADD ERROR HANDLING HERE! .then & .catch

    setCourseTitle("");
    setShortDescription("");
    setLongDescription("");
    setHours("");
    setInstructor("");
    setCategory("");
    setModule1("");
    setModule2("");
    setModule3("");
    setModule4("");
    setImageFileName("");
  };

  return (
    <>
      <Navbar />
      <NavLink to="/">
        <p className="backhome">Back to home</p>
      </NavLink>

      <section className="courseDetails-container">
        <h1 className="details-title">Add new course</h1>
        <div className="details-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="courseTitle">Course title</label>
              <input
                type="text"
                name="courseTitle"
                id="courseTitle"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="shortDescription">Short description</label>
              <input
                type="text"
                name="shortDescription"
                id="shortDescription"
                onChange={(e) => setShortDescription(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="longDescription">Long description</label>
              <textarea
                name="longDescription"
                id="longDescription"
                onChange={(e) => setLongDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="hours">Hours</label>
              <input
                type="text"
                name="hours"
                id="hours"
                onChange={(e) => setHours(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="instructor">Instructor</label>
              <input
                type="text"
                name="instructor"
                id="instructor"
                onChange={(e) => setInstructor(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="module1">Module 1</label>
              <input
                type="text"
                name="module1"
                id="module1"
                onChange={(e) => setModule1(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="module1">Module 2</label>
              <input
                type="text"
                name="module2"
                id="module2"
                onChange={(e) => setModule2(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="module1">Module 3</label>
              <input
                type="text"
                name="module3"
                id="module3"
                onChange={(e) => setModule3(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="module1">Module 4</label>
              <input
                type="text"
                name="module4"
                id="module4"
                onChange={(e) => setModule4(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imagename">Image file name</label>
              <input
                type="text"
                name="imagename"
                id="imagename"
                value={imageFileName}
                onChange={(e) => setImageFileName(e.target.value)}
              ></input>
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default AddNewCourse;
