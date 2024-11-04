import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeView from "./views/HomeView";
import AnalyticsView from "./views/AnalyticsView";
import TasksView from "./views/TasksView";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/HomeView" element={<HomeView />} />
        <Route path="/TasksView" element={<TasksView />} />
        <Route path="/AnalyticsView" element={<AnalyticsView />} />
      </Routes>
    </div>
  );
}

export default App; 
