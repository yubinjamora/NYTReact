import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () =>
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
        React.js Homework by Yubin J.
        </Link>
      </div>
      <ul className="nav navbar-nav mx-auto navbar-right">
      
      
      </ul>
    </div>
  </nav>;

export default Navbar;