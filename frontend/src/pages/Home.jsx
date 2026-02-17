import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import CourseData from "/src/assets/data/CourseData.jsx";
import CourseListItem from "/src/components/CourseListItem.jsx";
import { useState, useEffect } from "react";

function Home() {
  //simulate loading data from backend API with a promise for component 2.

  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function getCourseData(theData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const courseList = theData;

        resolve(courseList);
      }, 1000);
    });
  }

  useEffect(() => {
    getCourseData(CourseData).then((data) => {
      setCourses(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="homepage-container">
      <Navbar />
      <h1 className="currentcourses">Current courses</h1>

      <div className="courselistcontainer">
        {CourseData.map((course) => {
          return (
            <CourseListItem
              coursetitle={course.courseTitle}
              shortdescription={course.shortDescription}
              hours={course.hours}
              image={course.image}
              key={course.id}
              id={course.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
