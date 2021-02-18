import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-5 custom">
      <Link id="custom" className="navbar-brand m-auto" to="/">
        Employee Directory
      </Link>
    </nav>
  );
}

export default Navbar;
