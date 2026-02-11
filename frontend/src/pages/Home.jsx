import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "/src/components/Navbar.jsx";
import CourseData from "/src/assets/data/CourseData.jsx";
import CourseListItem from "/src/components/CourseListItem.jsx";

function Home() {
  // console.log(CourseData);

  console.log(CourseData[1].courseTitle);

  return (
    <>
      <Navbar />
      <section className="courselistcontainer">
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
      </section>
    </>
  );
}
export default Home;
