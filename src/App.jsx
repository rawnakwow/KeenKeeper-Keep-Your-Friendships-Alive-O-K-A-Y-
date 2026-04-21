import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import FriendDetails from "./Pages/Friendsdetails";
import Timeline from "./Pages/Timeline";
import Stats from "./Pages/Stats";
import NotFound from "./Pages/NotFound";


import "./App.css";
import "./index.css";

function App() {

  const [timeline, setTimeline] = useState([]);

  const addTimelineEntry = (entry) => {
    setTimeline(prev => [entry, ...prev]);
  };

  return (
    <Router>

      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">

        <Toaster position="top-right" />

        <Navbar />

        <main className="flex-grow">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/friend/:id"
              element={
                <FriendDetails
                  addEntry={addTimelineEntry}
                />
              }
            />

            <Route
              path="/timeline"
              element={
                <Timeline
                  entries={timeline}
                />
              }
            />

            <Route
              path="/stats"
              element={
                <Stats
                  entries={timeline}
                />
              }
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </Router>
  );
}

export default App;