import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/HomeView">Homepage</Link>
        </li>
        <li>
          <Link to="/TasksView"> Tasks</Link>
        </li>
        <li>
          <Link to="/AnalyticsView"> Tasks Analysis</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
