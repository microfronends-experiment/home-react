import React from "react";
import brandLogo from "../assets/brand-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/" className="Logo">
        <img src={brandLogo} alt="Brand Logo" height={40}></img>
        <h1 style={{ fontSize: "32px", margin: 0 }}>Employee Directory</h1>
      </Link>
    </div>
  );
};

export default Header;
