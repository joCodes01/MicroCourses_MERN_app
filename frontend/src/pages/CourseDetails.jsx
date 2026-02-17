import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import CourseData from "/src/assets/data/CourseData.jsx";
import { useState, useEffect } from "react";
import CodeBlocks from "/src/assets/images/code-blocks.png";

export function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //simulate loading data from backend API with a promise for component 2.

  function getCourseById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const course = CourseData.find((course) => course.id == id);
        resolve(course);
      }, 1000);
    });
  }

  useEffect(() => {
    getCourseById(id).then((data) => {
      setCourse(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <NavLink to="/">
        <p className="backhome">Back to home</p>
      </NavLink>
      {course ? (
        <section className="courseDetails-container">
          <div className="coursedetails-grid">
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
                <div className="detailsimage-container">
                  <img
                    className="detailsimage"
                    src={course.image}
                    width="500px"
                  />
                </div>
              </div>
            </div>
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
          <img
            className="image-codeblocks"
            src={CodeBlocks}
            width="600px"
            alt="Decorative image of blocks with code language names on."
          />
        </section>
      ) : (
        <p>Sorry, course not found.</p>
      )}
    </>
  );
}
export default CourseDetails;
