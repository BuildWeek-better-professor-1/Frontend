import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <h1> Better Professor </h1>
        <div>
          {/* <Link className="nav-links" to="/">
            Home
          </Link> */}
          {/* <Link className="nav-links" to="/proflogin">
          Login
        </Link> */}
          {/* <Link className="nav-links" to="/profregister">
            Register
          </Link> */}
          {/* <Link className="nav-links" to="/professordashboard">
            Dashboard
          </Link> */}
          <a
            className="nav-links"
            href="https://buildweek-better-professor-1.github.io/about.html"
            target="_blank"
          >
            About
          </a>
          <Link className="nav-links" to="/students">
            Students
          </Link>
          {/* <Link className="nav-links" onClick={handleSubmit} to="/proflogin">
            Logout
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
