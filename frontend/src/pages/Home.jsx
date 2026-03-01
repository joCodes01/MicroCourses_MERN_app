import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import CourseListItem from "/src/components/CourseListItem.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
        console.log("Error, unable to get course data: " + error);
        setErrorMessage("Unable to get course data, please try later.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>{errorMessage}</p>;

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
              coursetitle={course.title}
              shortdescription={course.description}
              hours={course.duration}
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
