import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-component" href="/">
        Home
      </a>
      <a className="navbar-component" href="/chat">
        Chat
      </a>
      <a className="navbar-component" href="/help">
        Help
      </a>
      <a className="navbar-component matchmaker">
        <span className="match">Match</span>
        <span className="maker">Maker</span>
      </a>
      <a className="navbar-component login" href="/login">
        Log In
      </a>
      <a className="navbar-component signup" href="/signup">
        Sign Up
      </a>
    </nav>
  );
}

export default Navbar;
