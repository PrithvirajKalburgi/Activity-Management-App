import React from "react";
import "../styling//HomeView.css";

const HomeView = () => {
  return (
    <div className="home-container">
      <h1>Info Page</h1>
      <section className="author-info">
        <h2>Author Information: </h2>
        <p><strong>Author:</strong> Prithviraj Kalburgi</p>
        <p><strong>Email: </strong>prithviraj.kalburgi@tuni.fi</p>
        <p><strong>Background: </strong>Software Engineering student</p>
      </section>
      <section className="app-instrcutions">
        <h2>Instructions for app usage: </h2>
        <p>blah blah blah </p>
      </section>
      <section className="AI-tools-used">
        <h2>AI tools used:</h2>
        <p>blah blah blah</p>
      </section>
      <section className="development-time">
        <h2>Total amount of hours: </h2>
        <p>blah blah blah</p>
      </section>
    </div>
  );
};

export default HomeView;
