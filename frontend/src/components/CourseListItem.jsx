import React from "react";
import { NavLink } from "react-router-dom";

function CourseListItem({ coursetitle, shortdescription, hours, image, id }) {
  return (
    <div>
      <img src={image} width="400px" alt={coursetitle} />
      <h2>{coursetitle}</h2>
      <p>{shortdescription}</p>
      <p>{hours} hours</p>
      <NavLink to={`/coursedetails/${id}`}>View course</NavLink>
    </div>
  );
}

export default CourseListItem;
