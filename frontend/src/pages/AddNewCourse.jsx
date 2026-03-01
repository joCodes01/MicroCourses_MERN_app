import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export function AddNewCourse() {
  const navigate = useNavigate();

  const [courseTitle, setCourseTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [hours, setHours] = useState("");
  const [instructor, setInstructor] = useState("");
  const [category, setCategory] = useState("");
  const [module1, setModule1] = useState("");
  const [module2, setModule2] = useState("");
  const [module3, setModule3] = useState("");
  const [module4, setModule4] = useState("");
  const [imageFileName, setImageFileName] = useState("newCourse.webp");
  const [modules, setModules] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newModules = [
      ...modules,
      { title: module1 },
      { title: module2 },
      { title: module3 },
      { title: module4 },
    ];
    setModules(newModules);

    axios
      .post("http://localhost:5999/courses", {
        title: courseTitle,
        description: shortDescription,
        longDescription: longDescription,
        modules: newModules,
        duration: hours,
        image: imageFileName,
        instructor: instructor,
        category: category,
      })
      .then(() => {
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

        navigate("/");
      })
      .catch((error) => {
        setError("Error, course not saved.");
        console.error("Error: unable to save course: ", error);
      });

    //ADD ERROR HANDLING HERE! .then & .catch
  };

  return (
    <div className="addnewcoursepage-container">
      <Navbar />
      <NavLink to="/">
        <p className="backhome">Back to home</p>
      </NavLink>

      <section className="courseDetails-container">
        <h1 className="details-title">Add new course</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="details-container">
          <form onSubmit={handleSubmit}>
            <div>
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
                <textarea
                  name="shortDescription"
                  id="shortDescription"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="longDescription">Long description</label>
                <textarea
                  name="longDescription"
                  id="longDescription"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                ></textarea>
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
            </div>
            <div>
              <div>
                <label htmlFor="hours">Hours</label>
                <input
                  type="text"
                  name="hours"
                  id="hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="instructor">Instructor</label>
                <input
                  type="text"
                  name="instructor"
                  id="instructor"
                  value={instructor}
                  onChange={(e) => setInstructor(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="module1">Module 1</label>
                <input
                  type="text"
                  name="module1"
                  id="module1"
                  value={module1}
                  onChange={(e) => setModule1(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="module1">Module 2</label>
                <input
                  type="text"
                  name="module2"
                  id="module2"
                  value={module2}
                  onChange={(e) => setModule2(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="module1">Module 3</label>
                <input
                  type="text"
                  name="module3"
                  id="module3"
                  value={module3}
                  onChange={(e) => setModule3(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="module1">Module 4</label>
                <input
                  type="text"
                  name="module4"
                  id="module4"
                  value={module4}
                  onChange={(e) => setModule4(e.target.value)}
                ></input>
              </div>
            </div>

            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default AddNewCourse;
