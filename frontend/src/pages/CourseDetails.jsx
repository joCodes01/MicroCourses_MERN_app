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
      {course ? (
        <section>
          <div>
            <h1>{course.courseTitle}</h1>
            <p>{course.longDescription}</p>
            <p>{course.hours} hours</p>
            <h2>Modules</h2>
            <ul>
              {course.Modules.map((module) => (
                <li>{module.title}</li>
              ))}
            </ul>
          </div>
          <img src={course.image} width="500px" />
        </section>
      ) : (
        <p>Sorry, course not found.</p>
      )}
    </>
  );
}
export default CourseDetails;
