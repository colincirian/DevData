import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { supabase } from "../assets/supabaseClient";
import devdataImage from "../images/devdata.png";
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const closeMenu = () => {
    const navElement = document.getElementById("navbarNav");
    if (navElement.classList.contains("show")) {
      navElement.classList.remove("show");
    }
  };

  const handleLogout = async (e) => {
    e.prevent.default();
  };

  const handleClick = (route) => {
    if (route === "/logout") {
      handleLogout();
      return;
    }
    navigate(route);
    closeMenu();
  };

  const img = {
    height: "200px",
    width: "200px",
    marginTop: "-60px"
  };

  return (
    <div className="nav-div">
      <img className="logo" style={img} src={devdataImage} />
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="centered-nav-items">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={"/account"}>
                  <button className="link-btn">Account</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"}>
                  <button className="link-btn">Login</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/signout"}>
                  <button className="link-btn">Sign Out</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
