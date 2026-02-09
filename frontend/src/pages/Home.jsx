import React from "react";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>This is home</h1>
      <NavLink to="/coursedetails">Course details</NavLink>
    </>
  );
}
export default Home;
