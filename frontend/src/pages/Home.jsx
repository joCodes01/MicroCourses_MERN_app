import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
// import CourseData from "/src/assets/data/CourseData.jsx";
import CourseListItem from "/src/components/CourseListItem.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //SIMULATE LOADING DATA FROM BACKEND API FOR COMPONENT 2.

  // function getCourseData(theData) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const courseList = theData;

  //       resolve(courseList);
  //     }, 1000);
  //   });
  // }

  // useEffect(() => {
  //   getCourseData(CourseData).then((data) => {
  //     setCourses(data);
  //     setIsLoading(false);
  //   });
  // }, []);

  //GET DATA FROM EXPRESS.JS

  useEffect(() => {
    axios
      .get("http://localhost:5999/courses")
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
        console.log(courses);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{"Error: " + errorMessage}</p>;

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="home-title-container">
        <h1 className="currentcourses">Current courses</h1>
        <NavLink to="/addnewcourse">
          <p className="addnewcourse">AddNewCourse</p>
        </NavLink>
      </div>

      <div className="courselistcontainer">
        {courses.map((course) => {
          // console.log("id:" + course.id);
          console.log("_id:" + course._id);
          return (
            <CourseListItem
              coursetitle={course.courseTitle}
              shortdescription={course.shortDescription}
              hours={course.hours}
              image={"http://localhost:5999/images/" + course.image}
              key={course._id}
              id={course._id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
