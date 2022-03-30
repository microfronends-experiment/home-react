import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const baseUrl =
  "https://employee-dir1-default-rtdb.asia-southeast1.firebasedatabase.app/";

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
    <div>
      {Object.entries(departments).map((d) => (
        <Link
          key={d[0]}
          style={{
            border: "1px solid",
            padding: "20px",
            margin: "10px",
            cursor: "pointer",
          }}
          to={"/department/" + d[0]}
        >
          {d[1]}
        </Link>
      ))}
    </div>
  );
};

export default Home;
