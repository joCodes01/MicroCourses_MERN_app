import React from "react";
import { NavLink } from "react-router-dom";

function CourseListItem({ coursetitle, shortdescription, hours, image, id }) {
  return (
    <>
      <NavLink to={`/coursedetails/${id}`}>
        <div className="coursecard">
          <div>
            <div className="cardimage-container">
              <img
                className="courseimage"
                src={image}
                width="400px"
                alt={coursetitle}
              />
            </div>
            <h2>{coursetitle}</h2>
          </div>

          <div>
            <p>{shortdescription}</p>
            <div className="cardfooter">
              <p>{hours} hours</p>
              <p>View course</p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default CourseListItem;
