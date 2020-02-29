import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const handleSubmit = () => {
    localStorage.clear();
    console.log("GG: localStorage: ", localStorage.clear());
  };

  return (
    <div className="nav-container">
      <nav>
        <h1> Better Professor </h1>
        <div>
          <Link className="nav-links" to="/">
            Home
          </Link>
          {/* <Link className="nav-links" to="/proflogin">
          Login
        </Link> */}
          <Link className="nav-links" to="/profregister">
            Register
          </Link>
          <Link className="nav-links" to="/professordashboard">
            Dashboard
          </Link>
          <Link className="nav-links" onClick={handleSubmit} to="/">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
