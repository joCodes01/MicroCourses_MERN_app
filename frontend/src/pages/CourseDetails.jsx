import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import CourseData from "/src/assets/data/CourseData.jsx";

export function CourseDetails() {
  const { id } = useParams();

  const course = CourseData.find((course) => course.id == id);
  console.log(course);

  return (
    <>
      <Navbar />
      <NavLink to="/">
        <p className="backhome">Back to home</p>
      </NavLink>
      {course ? (
        <section className="courseDetails-container">
          <div>
            <h1>{course.courseTitle}</h1>
            <div className="detailsimage-container-mobile">
              <img
                className="detailsimagemobile"
                src={course.image}
                width="500px"
              />
            </div>

            <div className="details-container">
              <p className="longdescrip">{course.longDescription}</p>
              <div className="modules-container">
                <div>
                  <h2>Modules</h2>
                  <ul>
                    {course.Modules.map((module) => (
                      <li>{module.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="enrol-container">
                  <p className="detailshours">{course.hours} hours</p>
                  <button>Enrol</button>
                </div>
              </div>
            </div>
          </div>
          <div className="detailsimage-container">
            <img className="detailsimage" src={course.image} width="500px" />
          </div>
        </section>
      ) : (
        <p>Sorry, course not found.</p>
      )}
    </>
  );
}
export default CourseDetails;
