import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">React App</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/dashboard">Dashboard</Link>
          <Link className="btn btn-outline-light" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
