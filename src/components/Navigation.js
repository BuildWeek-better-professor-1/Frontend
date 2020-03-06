import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <Zoom>
          <img
            className="logo "
            src="https://cdn.iconscout.com/icon/free/png-256/teacher-1659459-1409981.png"
          ></img>
        </Zoom>
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
