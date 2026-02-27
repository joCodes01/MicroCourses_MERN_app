import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

export function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //SIMULATE LOADING DATA FROM BACKEND API FOR COMPONENT 2.

  useEffect(() => {
    axios
      .get(`http://localhost:5999/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        setIsLoading(false);
        console.log("Test render" + course);
      })
      .catch((error) => {
        console.log("Oops there has been an error: " + error);
        setErrorMessage("oops there has been an error: " + error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Sorry, there is an error: {errorMessage}</p>;

  return (
    <>
      <Navbar />
      <NavLink to="/">
        <p className="backhome">Back to home</p>
      </NavLink>
      {course ? (
        <section className="courseDetails-container">
          <div className="detailsimage-container">
            <img
              className="detailsimage"
              src={"http://localhost:5999/images/" + course.image}
              width="500px"
            />
          </div>

          <h1 className="details-title">{course.courseTitle}</h1>
          <div className="coursedetails">
            <div className="details-container">
              <p className="short-description">{course.shortDescription}</p>
              <p className="long-description">{course.longDescription}</p>
            </div>

            <div className="modules-flex">
              <div className="modules-container">
                <div>
                  <h2>Modules</h2>
                  <ul>
                    {course.modules.map((module) => (
                      <li>{module.title}</li>
                    ))}
                  </ul>
                  <p className="detailshours">{course.hours} hours</p>
                </div>
              </div>
              <button className="enrol-button">Enrol</button>
            </div>
          </div>
        </section>
      ) : (
        <p>Sorry, course not found.</p>
      )}
    </>
  );
}
export default CourseDetails;
