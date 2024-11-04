import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/HomeView">Home</Link>
      <Link to="/TasksView">Tasks</Link>
      <Link to="/AnalyticsView">Tasks Analysis</Link>
    </nav>
  );
}

export default Navbar;
