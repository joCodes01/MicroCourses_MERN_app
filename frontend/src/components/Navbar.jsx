import React from "react";
import Logo from "/src/assets/images/Logo.png";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navigation">
      <NavLink to="/">
        <img class="logo" src={Logo} alt="" width="1585px" height="253px" />
      </NavLink>
      {/* <NavLink to="/">Home</NavLink> */}
    </nav>
  );
}

export default Navbar;
