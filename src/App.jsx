import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeView from "./views/HomeView";
import AnalyticsView from "./views/AnalyticsView";
import TasksView from "./views/TasksView";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/HomeView" element={<HomeView />} />
          <Route path="/Tasks" element={<TasksView />} />
          <Route path="/Tasks Analysis" element={<AnalyticsView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
