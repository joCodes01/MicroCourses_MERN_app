import React from "react";
import { NavLink } from "react-router-dom";

function CourseListItem({ coursetitle, shortdescription, hours, image, id }) {
  return (
    <>
      <NavLink className="nav-link" to={`/coursedetails/${id}`}>
        <div className="coursecard">
          <div className="cardimage-container">
            <img
              className="courseimage"
              src={image}
              width="400px"
              alt={coursetitle}
            />
          </div>

          <div className="card-info">
            <div>
              <h2 className="cardtitle">{coursetitle}</h2>
              <p className="shortdescription">{shortdescription}</p>
            </div>
            <div className="cardfooter">
              <p>{hours} hours</p>
              <p className="link-style">View course</p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default CourseListItem;
