import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../assets/Account";
import Avatar from "../assets/Avatar";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";
import App from "../assets/App";
import Login from "../pages/Login";
import SignOut from "../pages/SignOut";
import ProjectIdeas from "../pages/Projects";


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
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/app" element={<App />} />
            <Route path="/account" element={<Account />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/projects" element={<ProjectIdeas />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default Website;

