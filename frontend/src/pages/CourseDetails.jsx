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

  useEffect(() => {
    axios
      .get(`http://localhost:5999/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        setIsLoading(false);
        console.log("Test render" + course);
      })
      .catch((error) => {
        console.error("Error, unable to find data for this course: " + error);
        setErrorMessage("Unable to find this course: " + error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

  return (
    <div className="coursedetailspage-container">
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

          <h1 className="details-title">{course.title}</h1>
          <div className="coursedetails">
            <div className="details-container">
              <p className="short-description">{course.description}</p>
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
                  <p className="detailshours hours">{course.duration} hours</p>
                </div>
              </div>
              <button className="enrol-button">Enrol</button>
            </div>
          </div>
        </section>
      ) : (
        <p>Sorry, course not found.</p>
      )}
    </div>
  );
}
export default CourseDetails;
