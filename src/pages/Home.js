import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/logo-react-icon.png";
import { baseUrl } from "../constants/baseUrl";

const Home = () => {
  const [departments, setDepartments] = useState([]);
  const fetchDepartments = async () => {
    try {
      const response = await fetch(baseUrl + "departments.json");
      const data = await response.json();
      setDepartments(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="Home">
      <div style={{ fontSize: "24px", marginBottom: "16px" }}>Departments</div>
      <div className="Home__cards">
        {Object.entries(departments).map((d) => (
          <Link key={d[0]} to={"/department/" + d[0]} className="Home__card">
            {d[1]} &gt;
          </Link>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: "32px",
          bottom: "32px",
          zIndex: 5,
          backgroundColor: "#61dafb",
          borderRadius: "60px",
          display: "flex",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <img
          src={reactLogo}
          alt="React Logo"
          height={40}
          style={{ marginRight: "10px" }}
        ></img>
        <div style={{ color: "#000", fontSize: "18px", paddingRight: "10px" }}>
          Built with React JS
        </div>
      </div>
    </div>
  );
};

export default Home;
