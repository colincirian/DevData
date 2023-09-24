import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";
import App from "../assets/App";
import Login from "../pages/Login";
import SignOut from "../pages/SignOut";
import Projects from "../pages/Projects";
import Events from "../pages/Events";

function Website() {
  return (
    <div className="website">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<App />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default Website;

